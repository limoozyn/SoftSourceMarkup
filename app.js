function readyFn(){
  var exampleInputFile = document.getElementById('exampleInputFile');
  var exampleInputFileButton=document.getElementById('exampleInputFileButton');
  exampleInputFileButton.onclick = function() {
    exampleInputFile.click();
    return false;
}
$('.modal').on('shown.bs.modal', function(e){
    $('*[data-toggle="modal"]').one('focus', function(e){$(this).blur();});
});
$('.add-note-trigger').click(function(){
  $('.toggled').slideToggle();
});
$('#addOrder').on('change','#exampleInputFile' , function(){
      var a = document.getElementById('exampleInputFile');
      var fileLabel = document.getElementById('fileLabel');
      console.log(a);
      console.log(fileLabel);
      if(a.value == "")
      {
          fileLabel.innerHTML = "Файл не загружен";
      }
      else
      {
          var theSplit = a.value.split('\\');
          fileLabel.innerHTML = theSplit[theSplit.length-1];
      }
});
$('#addOrder .radio input').change(function(){
  $("select").prop('disabled', true);
  $(this).nextAll("select").prop('disabled', false);});
}
$( document ).ready( readyFn );