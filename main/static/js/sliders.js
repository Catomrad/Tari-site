function showLists(n){
    let i;
    let lists = document.getElementsByClassName("list");
    console.log(lists)
    for (i = 0; i < lists.length; i++) {
        lists[i].className = lists[i].className.replace(" choosen", "");
      }
    console.log(lists[n])
    lists[n].className += " choosen";
}
showLists(0);