let API='http://api.openweathermap.org/data/2.5/weather?q=';

let second ='&appid=b067377a72c98ae6963cdae2e35408d9'




let input,btn,output
input = document.getElementById('input')
btn = document.getElementById('button')
output = document.getElementById('output')


const searchWeahther = async()=>{
let text = input.value
const url = API + text + second
let requset = await fetch(url)
let response = await requset.json()
input.value = ''
renderWeather(response)
console.log(response)
}


input.addEventListener('keyup', e =>{
e.preventDefault();
if(e.keyCode === 13)
searchWeahther()
})
btn.addEventListener('click', ()=>{
searchWeahther()
})

const renderWeather = (results)=>{
output.innerHTML=' '
let div = document.createElement('div')
let nameCity = document.createElement('h3')
let temp = document.createElement('h3')
let country = document.createElement('h3')
let wind = document.createElement('h3')
    
nameCity.innerHTML = 'Город: '+results.name
temp.innerHTML = 'Tемпература: '+ (results.main.temp - 273.15).toFixed(1)+' °'
country.innerHTML = 'Страна: ' + results.sys.country
wind.innerHTML ='Ветер: '+' ' +results.wind.speed + ' м/с'
    

div.append(nameCity,temp,wind,country)
output.append(div)
    
}