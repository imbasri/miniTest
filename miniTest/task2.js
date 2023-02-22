// 1. Silakan gunakan API yang disediakan http://openweathermap.org
// 2. Tolong tampilkan output berupa ramalan cuaca kota Jakarta untuk 5 hari ke depan
// 3. Yang ditampilkan hanya 1 suhu per hari
// 4. Soal ini tidak membutuhkan akun berbayar.
const apiKey = "32adba6439efba519c18605cb6994e56";
const city = "Jakarta";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`;
console.log(url);
fetch(url, {
   method: "GET",
   headers: {
      "Content-Type": "application/json",
   },
})
   .then((response) => response.json())
   .then((data) => {
      const dailyTemperatures = {};

      data.list.forEach((forecast) => {
         const date = new Date(forecast.dt_txt).toDateString();
         // console.log(date.substring(0, 3), "hasil");
         // console.log(date.substring(3, 15));
         const day = date.substring(0, 3);
         const dates = date.substring(3, 15);
         const dateTime = `${day},${dates}`;
         const temperature = forecast.main.temp;

         if (dateTime in dailyTemperatures) {
            // ambil suhu terkecil untuk setiap hari
            dailyTemperatures[dateTime] = Math.min(
               dailyTemperatures[dateTime],
               temperature
            );
         } else {
            dailyTemperatures[dateTime] = temperature;
         }
      });
      // console.log(dailyTemperatures, "hasil");
      // tampilkan suhu untuk setiap hari
      console.log("\n");
      console.log("Weather Forecast");
      Object.entries(dailyTemperatures).forEach(([dateTime, temperature]) => {
         console.log(`${dateTime}: ${temperature}°C`);
      });
   })
   .catch((error) => console.error(error));
