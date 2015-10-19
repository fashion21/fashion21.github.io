
@Grapes( @Grab('com.xlson.groovycsv:groovycsv:1.0') )
import com.xlson.groovycsv.*
import java.text.Normalizer;
import java.text.Normalizer.Form;
import java.util.regex.Pattern;

String csvFilePath = 'f22.csv'

println "Scraping ${csvFilePath}..."

File csvFile = new File(csvFilePath)
def data = new CsvParser().parse(new FileReader(csvFile))
List products
List productList = []

data.each { row ->
    Map product = [:]
    row.columns.each{ key, value ->
        product[key] = row[key]
    }
    productList << product
}

productList.groupBy { it.id }.each {
    String productName = it.value.find { it.product_name }.product_name
    String description = it.value.find { it.product_name }.Description
    it.value.each {
        it.product_name = productName
        it.Description = description
        it.category = it.category.toLowerCase()
    }
}

productList = productList.groupBy {
    it.subMap("id", "product_name", "Description", "category", "net_weight_grams", "top_pick")
}.collect {
    it.key + [colors: it.value*.subMap(["color_name", "color_hex"])]
}


'mkdir -p out'.execute()
productList.groupBy {it.category}.each {
    "mkdir -p out/$it.key".execute()
}
productList.eachWithIndex { product, index ->
    "mkdir -p out/$product.category".execute()
    File file = new File("out/$product.category/" + slugify(product.product_name) +'.md')
    println "out/$product.category/" + slugify(product.product_name) +'.md'
    file.write ('---\n')

    file << "title: \"$product.product_name\"\n"
    file << "layout: productItem\n"
    file << "categories: [\"$product.category\"]\n"
    file << "is_top_pick: $product.top_pick\n"
    file << "feature_image: \"http://res.cloudinary.com/ruel/image/upload/v1438575069/fashion21/picture-" + (index + 1) + ".jpg\"\n"
    file << "colors:\n"
    product.colors.each{
        file << "    - color: $it.color_name\n"
        file << "      hex: $it.color_hex\n"
    }

    file << '---' << '\n'
    file << product.Description
}

public String slugify (String toBeSlugged){
    Pattern NONLATIN = Pattern.compile("[^\\w-]")
    Pattern WHITESPACE = Pattern.compile("[\\s]")

    String nowhitespace = WHITESPACE.matcher(toBeSlugged.replaceAll(" - ", " ")).replaceAll("-")
    String normalized = Normalizer.normalize(nowhitespace, Form.NFD)
    String slug = NONLATIN.matcher(normalized).replaceAll("")
    return slug.toLowerCase(Locale.ENGLISH)
}
