{
    console.log("Home script loaded");

    var individuals = document.getElementsByClassName('individual');

    for (let i = 0; i < individuals.length; i++) {
      individuals[i].addEventListener('click', function() {
        console.log('Clicked');
        let id=individuals[i].getAttribute("id");
        window.location.href = `/project/details/?id=${id}`;
      });
    }

}