# Locally - Causes that matter to you

![locally-logo](https://user-images.githubusercontent.com/79177865/140610370-d70cbfbc-77d2-4593-9fce-58c336967b55.jpg)

Locally is a crowdfunding app that allows users in a specific location to view projects happening in their community and pledge donations.

The app has been deployed on [Heroku](https://locally-crowdfund.herokuapp.com/).

At present, the Brisbane edition is available.

*Plans are in place to create Sydney, Melbourne and Perth editions.*

## Stack

Locally's frontend was created with ReactJS.
Its interface is integrated with a [Django/DRF backend](https://github.com/dalilakatialeo/locally_repo) via APIs.

## Tools

The tools used in development were:
- Visual Studio Code
- Git
- Insomnia

### Disclaimer

At present, pledging donations is only available through a POST method on Insomnia.

### Screenshots

#### Homepage

![image](https://user-images.githubusercontent.com/79177865/140610553-06eb8479-8487-4f93-8830-5e4b09b010cc.png)

#### Project card for not logged users

![image](https://user-images.githubusercontent.com/79177865/140610547-7761d00e-3e57-47f7-b08f-1c0af08b3d7c.png)

#### Error 401 Unauthorised: users must be logged in to post a donation

![image](https://user-images.githubusercontent.com/79177865/140610665-422a6aa4-c2e2-43c5-87e0-ec2a3cf4fb9e.png)

#### Signup page

![image](https://user-images.githubusercontent.com/79177865/140610606-bcb082bb-acaa-4863-8890-e5a218920174.png)

#### Login page

![image](https://user-images.githubusercontent.com/79177865/140610613-4b61a5da-780d-42ad-b164-b16ee52b13b5.png)

#### Project card for logged in users

![image](https://user-images.githubusercontent.com/79177865/140610731-96591bac-1ef7-4d16-bdca-f241a3258ccb.png)

#### Donation page

![image](https://user-images.githubusercontent.com/79177865/140610744-7256e40a-87ce-4439-b839-9115eea7fedf.png)

#### Post-donation page aka Thank you

![image](https://user-images.githubusercontent.com/79177865/140610765-a7e3d26f-83c1-4da4-98e3-4a84652616a5.png)

#### New Project form

![image](https://user-images.githubusercontent.com/79177865/140610864-ba08b173-1c43-41a8-9593-48ab6ea0f515.png)

#### Successfully created project

![image](https://user-images.githubusercontent.com/79177865/140611052-52398f3c-c04f-4d60-badd-c39bb98f43df.png)

![image](https://user-images.githubusercontent.com/79177865/140611061-6d375fd3-44af-4086-b5a5-781b8f71f62d.png)

#### Error 401 Unauthorised: users must be logged in to create projects
(Even if they manually navigate to the [New Project URL](https://locally-crowdfund.herokuapp.com/new-project/), users are not able to create a project and are redirected to an error page.

![image](https://user-images.githubusercontent.com/79177865/140611092-d6da2214-47c8-44e2-931b-314cd49cb311.png)

#### Donations created on Insomnia

![image](https://user-images.githubusercontent.com/79177865/140611175-f36505f0-a88d-49be-8a2e-0c497e035a0e.png)

#### Project with donation

![image](https://user-images.githubusercontent.com/79177865/140611185-d8ec9a78-c0ab-4bd2-abc7-49c838dea397.png)


## Style guide

### Logo

- The main heading of the app is [Glacial Indifference](https://www.fontsquirrel.com/fonts/glacial-indifference) in 26.9 pt.
- The subheading is [Brittany](https://freefontsvault.com/brittany-font-download-free/) in 10.8 pt.
- The city subtitle is [Glacial Indifference](https://www.fontsquirrel.com/fonts/glacial-indifference) in 5 pt.

The logo was created with [Canva](Canva.com) and imported as a .jpg image in the public folder of the React app.

#### Theme colours

- Background colour is #ebfeff
- Font colour is #212121

#### Font

- The font utilised across the app is [Nunito](https://fonts.google.com/share?selection.family=Nunito:wght@300;600) in 300 and 600px.
