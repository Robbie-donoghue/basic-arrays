let blogPosts = ["first" , "second" , "third" , "fourth"  , 5 ,  6 ]

console.log(blogPosts[0])
console.log(blogPosts[1])
console.log(blogPosts[2])

blogPosts[blogPosts.length - 1 ] = "sixth element"

let array = [ 1 ,2,3,4,]
let array2 = [`string` , `string2` , `string3` ]
let array3 = [`boom` , `bop` , `pow`]
function findElement(index1, index2, index3)
{
    let cherryblossom = array[index1]
    let lillies = array2[index2]
    let flowerpower = array3[index3]
    return [cherryblossom, lillies, flowerpower]
}

//what will find element return
//findElement (0, 2, 2)

console.log( findElement (3 , 0 , 2))