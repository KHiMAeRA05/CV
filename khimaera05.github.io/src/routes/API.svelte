<script lang="ts">
    interface WError {
        status: string;
    }

    interface WLoading {
        loading: boolean;
    }

    interface WData {
        region: string;
        currentConditions: {
            temp: {
                c: number;
                f: number;
            }
        }
    }

    let resWeather;

    const getWeather = () => {

        let weather: WData | WError | WLoading = {loading: true}

        fetch("https://weatherdbi.herokuapp.com/data/weather/" + "Innopolis")
            .then((res) => res.text())
            .then((res) => JSON.parse(res) as WData | WError)
            .then((res) => {
                weather = res;
                if ((weather as WData).currentConditions) {
                    resWeather.innerText = (weather as WData).currentConditions.temp.c.toString();
                    resWeather.innerText += '℃ | ' + (weather as WData).currentConditions.temp.f + '℉\nInnopolis,\nRepublic of Tatarstan';
                    console.log(resWeather);
                } else if ((weather as WError).status) resWeather.innerText = "There is no such a location";
            })
            .catch(error => {
                resWeather.innerText = `Error: \n${error}\n\n Looks like site isn't loading`;
                console.error('There was an error!', error);
            });
        console.log(weather);
        if ((weather as WLoading).loading) resWeather.innerText = "Please Stand By 💿";
    }

</script>

<section class="cv-section" id="api">
    <h2 class="cv-section-headings" style="color: #f0f0f0; background: #333333;">API</h2>
    <div class="row container">
        <div class="column api-left">

            <div bind:this={resWeather} class="weather-style">
                <p class="mb-1"> What's the weather like today?</p>
            </div>

        </div>
        <div class="column api-right">
            <h3 class="mb-0" style="color: #333333;">Get the weather</h3>
            <div class="cv-section-text">
                <p class="mb-1" id="id1">Click the button to get the weather</p>

                <button type="button" class="fill" on:click={getWeather}>Update</button>

            </div>

        </div>
    </div>
</section>
