console.log("home page js file")
async function API() {
    const url = "https://api.covid19api.com/summary";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
API().then(data => {
    console.log(data["Global"]); //global data
    var all_global_data = data.Global;

    document.querySelector(".total-confirmed").innerHTML += all_global_data.TotalConfirmed;
    document.querySelector(".total-recovered").innerHTML += all_global_data.TotalRecovered;
    document.querySelector(".total-deaths").innerHTML += all_global_data.TotalDeaths;
    document.querySelector(".new-confirmed").innerHTML += all_global_data.NewConfirmed;
    document.querySelector(".new-recovered").innerHTML += all_global_data.NewRecovered;
    document.querySelector(".new-deaths").innerHTML += all_global_data.NewDeaths;

})
