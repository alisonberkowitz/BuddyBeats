define(['knockout'],
    function (ko) {
        var vm = {
            spotifyURL: ko.observable(""),
            blast: blast
        };



        return vm;

        function blast() {
        	//get the json object for user
        	//add playlist to json object
        	//change playlist in all of the followers to their playlist
        	$.ajax({
  				url: 'http://www.sweatinsync.com/api/blast.php?url='+vm.spotifyURL,
  				success:function(data){
    				alert(data);
  					}
				});
        }
    }
);