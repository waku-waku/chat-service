<template>
  <div id="app">
    <header id="header">
      <div class="container">
        <h1><a href="/">Gourmet</a></h1>

        <nav id="nav">
          <ul>
            <router-link tag="li" to="/" exact><a>home</a></router-link>
            <router-link tag="li" to="/login"><a>login</a></router-link>
            <router-link tag="li" to="/about"><a>about</a></router-link>
            <router-link tag="li" to="/chat"><a>chat</a></router-link>
          </ul>
        </nav>
      </div>
    </header>

    <div class="container">
      <router-view id="router-view"></router-view>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@charset "utf-8";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // margin-top: 60px;
}

#router-view {
  // padding: 2rem 0;
  // text-align: center;
}

html, body {
  width: 100%;
  height: 100%;
  font-size: 100%;
  background: #f7f9f9;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
  color: #111;
}

.container {
  width: 960px;
  position: relative;
  margin: 0 auto;
}

.thumb {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    // overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    display: block;
    min-width: 100%;
    min-height: 100%;
    max-width: inherit;
  }
}

.black {
  a {
    color: #111;
  }
}

#header {
  position: relative;
  background: #e6713f;
  color: #fff;
  padding: 0.5rem 0.5rem 0.5rem 0;
  text-align: left;
  box-shadow: 0 0 1px 0 #777;
  h1 {
    // position: relative;
    margin: 0 auto;
    vertical-align: middle;
    height: 100%;
    a {
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      text-decoration: none;
      font-size: 1.5rem;
      color: #fff;
    }
  }
  #nav {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    // padding: 2px 0 0;
    vertical-align: middle;
    ul {
      margin: 0.45rem 0 0 0;
      li {
        display: inline-block;
        margin: 0 0.5rem;
        font-size: 0.9rem;
        a {
          color: #fff;
        }
      }
    }
  }
}

#main {
  // background-image: url(../images/white_dog.jpg);
  background: #111;
  background-position: 100%;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0.5rem 0;
  .living {
    margin: 1rem auto 0;
    .livingText {
      display: inline-block;
      font-size: 1rem;
      border-bottom: solid 1px #cecece;
      color: #fff;
    }
    .livingList {
      margin: 1rem auto 0;
      padding: 0 0.5rem;
      ul {
        li {
          position: relative;
          left: 0;
          top: 0;
          display: inline-block;
          width: 49%;
          height: 20vw;
          box-shadow: #f1f1f1 0 0 3px 0;
          border: solid 1px rgba(230,230,230,0.45);
          margin: 1rem 0 0;
          float: left;
          .detail {
            position: relative;
            left: 0;
            bottom: 52px;
            padding: 0.3rem;
            background: rgba(230,230,230,0.45);
            opacity: 0;
            .title {
              font-size: 1rem;
            }
            &:hover {
              opacity: 1;
            }
          }
          &:nth-child(even) {
            float: right;
          }
        }
      }
    }
  }
  .loginBox {
    width: 100%;
    box-shadow: #f1f1f1 0 0 3px 0;
    background-color: rgba(51,51,51,0.25);
    padding: 5.0rem 0.5rem 10rem;
    margin: 1rem auto;
    text-align: center;
    p {
      font-size: 1.5rem;
      color: rgba(210,210,210,0.50);
    }
    .form {
      margin: 2rem 0 1rem;
      a {
        font-size: 1.0rem;
        color: rgba(210,210,210,0.50);
      }
    }
  }
  .ddd {
    margin: 3rem auto;
  }
}

#footer {
  background: #111;

  padding: 1rem 1rem;
    text-align: right;
    color: #fff;
}


</style>
