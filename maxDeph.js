function crawlWeb(seed, maxDepth){
    let tocrawl = [seed]
    let crawled = []
    let next_depth = []
    let depth= 0
    while (tocrawl.length != 0 && depth <= maxDepth){
        let pageUrl = tocrawl.pop()
        if (!crawled.includes(pageUrl)){
            next_depth = union(next_depth, getAllLinks(getPage(pageUrl)))
            crawled.push(pageUrl)
        }
        if (tocrawl.length == 0){
            depth++
            tocrawl = next_depth
            next_depth = []
        }     
    }     
    return crawled
}