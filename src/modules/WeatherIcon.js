export default function getWeatherIcon(code) {
    switch (code) {
        case 1000:
            return "fas fa-sun";
        case 1003:
            return "fas fa-cloud-sun";
        case 1006:
            return "fas fa-cloud";
        case 1009:
            return "fas fa-cloud";
        case 1030:
            return "fas fa-smog";
        case 1063:
            return "fas fa-cloud-showers-heavy";
        case 1066:
            return "fas fa-snowflake";
        case 1069:
            return "fas fa-snowflake";
        case 1072:
            return "fas fa-snowflake";
        case 1087:
            return "fas fa-bolt";
        case 1114:
            return "fas fa-snowflake";
        case 1117:
            return "fas fa-snowflake";
        case 1135:
            return "fas fa-smog";
        case 1147:
            return "fas fa-smog";
        case 1150:
            return "fas fa-cloud-rain";
        case 1153:
            return "fas fa-cloud-rain";
        case 1168:
            return "fas fa-cloud-rain";
        case 1171:
            return "fas fa-cloud-rain";
        case 1180:
            return "fas fa-cloud-showers-heavy";
        case 1183:
            return "fas fa-cloud-showers-heavy";
        default:
            return "fas fa-question";
    }
}
