readJson = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name')
    // http://localhost:8080
    fetch('https://raneysha.github.io/miraigadget/source.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            //    this.users = json;
            //    console.log(this.users);
            json.forEach(element => {
                if (element.name == name) {
                   window.location.replace(element.link);
                }
            });
        })
        .catch(function () {
            this.dataError = true;
        })
}
readJson();