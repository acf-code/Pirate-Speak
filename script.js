$(document).ready(function () {
  // gets triggered when entire document is loaded
  $("#normal").keyup(function () {
    //gets triggered on onkeyup evemt
    var words = $("#normal").val();
    // stores the value of the landlubber text box
    words = words.replace(/hello/gi, "ahoy");
    words = words.replace(/you/gi, "ye");
    words = words.replace(/stop/gi, "avast");
    words = words.replace(/your/gi, "yer");
    words = words.replace(/ocean/gi, "briny deep");
    words = words.replace(/friend/gi, "matey");
    words = words.replace(/yes/gi, "aye");
    words = words.replace(/beer/gi, "grog");
    words = words.replace(/^/, "Arr, me hearties.");
    words = words.replace(/(\w+)ev(\w+)\s/g, "$1e'$2 ");
    // uses regex to modify all the text
    $("#pirate").val(words);
    // replaces the pirate text box with the new text
  });
});
