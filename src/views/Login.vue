<template>
  <div class="container-fluid">
    <div class="row logo-r">
      <div class="col-6 offset-3 logo-p">
        <h2 class="txt-1">
          <i class="fas fa-bullhorn"></i>molly's always wrong
        </h2>
      </div>
    </div>
    <div class="row login-r">
      <div class="col-12 login-p">
        <form class="l-form">
          <label class="label-1" for="email">email</label>
          <input class="input" type="email" name="email">
          <label class="label-2" for="password">password</label>
          <input class="input" type="password" name="password">
          <button class="lr-btn" type="submit">{{isLogin ? "login" : "register"}}</button>
        </form>
        <!-- <button @click="isLogin = !isLogin">Toggle L/R</button> -->
      </div>
    </div>
    <div class="row cpr-r">
      <div class="col-8 offset-2 cpr-p">
        <h6 class="txt-2">
          <i class="far fa-copyright fa-sm"></i>Madison Abegglen 2018
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "login",
  components: {},
  data() {
    return {
      isLogin: true
    };
  }
};
</script>

<style scoped>
.container-fluid {
  height: 100vh;
  background-color: rgb(201, 201, 201);
  font-family: "Work Sans", sans-serif;
}
.logo-r {
  height: 25vh;
  /* border: solid red; */
}
.logo-p {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: rgb(11, 3, 45, 0.4);
  margin-bottom: 2rem;
  margin-top: 10rem;
}
.login-r {
  height: 50vh;
  background-color: #ffb997;
  /* border: solid red; */
}
.login-p {
  height: 40vh;
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(246, 126, 125, 0.5);
  /* border: solid red; */
}
.l-form {
  display: flex;
  flex-direction: column;
}
.input {
  border: none;
  box-shadow: 0 0 1px rgb(161, 82, 82);
  height: 7vh;
  width: 40vw;
}
.label-1 {
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0b032d;
}
.label-2 {
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0b032d;
  margin-top: 1rem;
}
.lr-btn {
  margin-top: 1rem;
  border: none;
  box-shadow: 0 0 1px rgb(92, 92, 92);
  height: 5vh;
  background-color: rgb(132, 59, 98, 0.8);
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.cpr-r {
  height: 25vh;
}
.cpr-p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fa-bullhorn {
  margin-right: 1rem;
}
.txt-1 {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  color: #0b032d;
}
.txt-2 {
  text-transform: uppercase;
  /* font-weight: bold; */
  letter-spacing: 3px;
  color: #0b032d;
  font-size: 12px;
}
.fa-copyright {
  margin-right: 5px;
  /* margin-bottom: 2px; */
}
</style>
