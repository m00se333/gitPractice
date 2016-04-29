$("#wrapper div").hover(function(){
  var colors = ["#BFE0B4", "#E0BFB4", "#B4D5E0", "#50B588", "#B5507D", "#5550B5", "#B5507E"
                , "#BD1DCC", "#CC661D", "#1D83CC", "#2BCC1D", "#90B3F0", "#F090E3", "#F0CD90", "white"];
  var randomNumber = Math.floor(Math.random()*colors.length);
  $(this).css("background", colors[randomNumber])
})
