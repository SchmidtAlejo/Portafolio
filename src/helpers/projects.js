import rmWebAppImage from "./../assets/rm-web-app.png";

const RM_WEB_APP_NAME = "Rick-Morty-WebApp";
const RM_WEB_APP_GIT_HUB = "https://github.com/SchmidtAlejo/React-Web-App";
const RM_WEB_APP_WEB = "https://schmidtalejo.github.io/Rick-Morty-WebApp/";
const RM_RECIPE_APP_NAME = "RecipesApp";
const RM_RECIPE_APP_IMAGE= 'https://www.elmueble.com/medio/2022/05/03/recetas-sanas-para-cocinar-en-mayo_bf0b4132_1200x630.png';
const RM_RECIPE_APP_GIT_HUB = "https://github.com/SchmidtAlejo/Recipe-Mobile-App";
const RM_RECIPE_APP_WEB = "https://drive.google.com/file/d/1XH2TI2cq_bhtNGsdwuEA9504YeK7ggoe/view";
const RM_ANDROID_APP_IMAGE = "https://c4.wallpaperflare.com/wallpaper/152/633/174/rick-and-morty-wallpaper-preview.jpg";
const RM_ANDROID_APP_NAME = "Rick And Morty App";
const RM_ANDROID_APP_GIT_HUB = "https://github.com/SchmidtAlejo/RickAndMortyAndroidMobileApp";
const RM_ANDROID_APP_WEB = "https://drive.google.com/file/d/1bWYDD6uMLDwPwpVBpGjG0rd1Mo3vJKgf/view";

export default [
  {
    src: rmWebAppImage,
    projectName: RM_WEB_APP_NAME,
    hrefGitHub: RM_WEB_APP_GIT_HUB,
    hrefProject: RM_WEB_APP_WEB,
  },
  {
    src: RM_RECIPE_APP_IMAGE,
    projectName: RM_RECIPE_APP_NAME,
    hrefGitHub: RM_RECIPE_APP_GIT_HUB,
    hrefProject: RM_RECIPE_APP_WEB,
  },
  {
    src: RM_ANDROID_APP_IMAGE,
    projectName: RM_ANDROID_APP_NAME,
    hrefGitHub: RM_ANDROID_APP_GIT_HUB,
    hrefProject: RM_ANDROID_APP_WEB,
  },
];
