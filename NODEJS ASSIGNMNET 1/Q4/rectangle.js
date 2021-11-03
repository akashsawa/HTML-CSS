module.exports.calrect=
{
   length:5,
   width:10,
   area:function()
   {
       console.log("AREA OF RECTANGLE: "+(this.length*this.width));
   },
   peri:function()
   {
       console.log("PERIMETER OF RECTANGLE: "+(2*(this.length+this.width)));
   }

}