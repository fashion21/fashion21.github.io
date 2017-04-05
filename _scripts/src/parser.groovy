
@Grapes( @Grab('com.xlson.groovycsv:groovycsv:1.0') )
import com.xlson.groovycsv.*
import java.text.Normalizer;
import java.text.Normalizer.Form;
import java.util.regex.Pattern;
import groovy.io.FileType

def dir = new File("categories")
dir.eachFileRecurse (FileType.FILES) { csvFile ->

    println "Scraping ${csvFile.name}..."

    def data = new CsvParser().parse(new FileReader(csvFile))
    List productList = []

    data.each { row ->
        Map product = [:]
        row.columns.each{ key, value ->
            product[key] = row[key]
        }
        productList << product
    }

    productList.groupBy { it.id }.each {
        String id = it.key
        String productName = it.value.find { it.product_name }.product_name
        String imageName = it.value.find { it.product_name }.image_name
        String description = it.value.find { it.product_name }.Description
        it.value.each {
            it.product_name = productName
            it.Description = description
            it.image_name = imageName
            it.category = it.category.toLowerCase()
        }
    }

    productList = productList.groupBy {
        it.subMap("id", "product_name", "image_name", "Description", "category", "net_weight_grams", "top_pick")
    }.collect {
        it.key + [colors: it.value*.subMap(["color_name", "color_hex"])]
    }

    productList.findAll { it.colors.findAll { it.color_hex.contains('+') } }.each { product ->
        product.multiple_colors = true
    }
    productList.findAll { it.colors.findAll { it.color_hex.contains('.jpg') } }.each { product ->
        product.color_image = true
        product.colors.collect{ it.color_hex = "https://res.cloudinary.com/dp79ddrmc/image/upload/v1455006447/products/" + it.color_hex }
    }

    'mkdir -p out'.execute()
    productList.groupBy {it.category}.each {
        "mkdir -p out/$it.key".execute()
    }
    productList.eachWithIndex { product, index ->
        if(product.image_name){
            "mkdir -p out/$product.category".execute()
            File file = new File("out/$product.category/" + slugify(product.product_name) +'.md')
            println "out/$product.category/" + slugify(product.product_name) +'.md'
            file.write ('---\n')

            file << "id: $product.id\n"
            file << "title: \"$product.product_name\"\n"
            file << "layout: productItem\n"
            file << "categories: [\"$product.category\"]\n"
//        if (product.top_pick) file << "is_top_pick: $product.top_pick\n"
            file << "feature_image: \"" + (product.image_name ? "https://res.cloudinary.com/dp79ddrmc/image/upload/v1455006447/products/$product.image_name" : "https://placehold.it/275x335?text=ruuuuuuuuu!!") + "\"\n"
            if (product.multiple_colors) file << "multiple_colors: $product.multiple_colors\n"
            if (product.color_image) file << "color_image: $product.color_image\n"
            file << "colors:\n"
            product.colors.each{
                file << "    - color: \"$it.color_name\"\n"
                file << "      hex: \"$it.color_hex\"\n"
            }

            file << '---' << '\n'
            file << product.Description
        }
    }
}

public String slugify (String toBeSlugged){
    Pattern NONLATIN = Pattern.compile("[^\\w-]")
    Pattern WHITESPACE = Pattern.compile("[\\s]")

    String nowhitespace = WHITESPACE.matcher(toBeSlugged.replaceAll(" - ", " ")).replaceAll("-")
    String normalized = Normalizer.normalize(nowhitespace, Form.NFD)
    String slug = NONLATIN.matcher(normalized).replaceAll("")
    return slug.toLowerCase(Locale.ENGLISH)
}
