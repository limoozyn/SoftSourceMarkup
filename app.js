function readyFn(){
  var exampleInputFile = document.getElementById('exampleInputFile');
  var exampleInputFileButton=document.getElementById('exampleInputFileButton');
  exampleInputFileButton.onclick = function() {
    exampleInputFile.click();
    return false;
}
$('#addCompany').on('change','#exampleInputFile' , function(){ 
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
$('#addCompany .radio input').change(function(){
  $("select").prop('disabled', true);
  $(this).nextAll("select").prop('disabled', false);});
}
$( document ).ready( readyFn );