function visible(type) {
    var childDivs = document.getElementById('menu').getElementsByTagName('div');
    var x = document.getElementById(type);
    for( i=0; i< childDivs.length; i++ )
    {
        var childDiv = childDivs[i];
        if(childDiv == x) {
            childDiv.style.display = "block";
        }
        else childDiv.style.display = "none";
    }
}