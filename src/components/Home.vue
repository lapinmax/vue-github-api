<template>
  <div id="home" class="mt-4">
    <input type="text" v-model="username" placeholder="Username to github">
    <div class="mt-5">
      <table class="table table-dark">
        <thead>
        <tr>
          <th scope="col">Full repository name</th>
          <th scope="col">Owner</th>
          <th scope="col">Stargazers count</th>
          <th scope="col">Link to the fork repository</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="repo in repos">
          <th scope="col">{{repo.full_name}}</th>
          <th scope="col">{{repo.owner.login}}</th>
          <th scope="col">{{repo.stargazers_count}}</th>
          <th scope="col"><a :href="(repo.svn_url)">{{repo.svn_url}}</a></th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import './../style/main.css';

    function queryGithubAPI(username) {
        return fetch(`https://api.github.com/users/${username}/repos`).then(response => response.json());
    }

    function check(func, wait, immediate) {
        self.timeout = self.timeout || null;
        return function () {
            let context = this, args = arguments;
            clearTimeout(self.timeout);
            self.timeout = setTimeout(function () {
                self.timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !self.timeout) func.apply(context, args);
        }
    }

    export default {
        data() {
            return {
                username: '',
                repos   : [],
            }
        },
        watch: {
            username: function () {
                check(() => {
                    queryGithubAPI(this.username).then(repos => this.repos = repos);
                }, 500)();
            }
        }
    }

</script>