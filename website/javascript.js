var FunCon = function(){
    this.text = document.getElementById("hungry");
    this.array = ["Unexpected guests?", "Cooking gone wrong?", "Movie marathon?", "Game night?", "Late night at office?", "Hungry?"];
    this.count = 0;
}
FunCon.prototype.display = function(){
    var self = this;
    window.onload = setInterval(function(){
        self.text.innerHTML = self.array[self.count++];
        if(self.count>5) self.count=0;
    }, 2000);
}
var x = new FunCon();
x.display();