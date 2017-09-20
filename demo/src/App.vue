<template>
  <div id="app">
    <section class="section">
      <div class="form-container">
        <div class="field">
          <label class="label">Home Zip</label>
          <div class="control">
            <input class="input" type="text" placeholder="Zip Code">
          </div>
        </div>

        <div class="field">
          <label class="label">Current Zip</label>
          <div class="control">
            <input class="input" type="text" placeholder="Zip Code">
          </div>
        </div>

        <div class="field">
          <label class="label">Current Salary</label>
          <div class="control">
            <input class="input" type="text" placeholder="$">
          </div>
        </div>

        <div class="field">
          <label class="label">Current Rent/Mortgage</label>
          <div class="control">
            <input class="input" type="text" placeholder="$">
          </div>
        </div>

        <div class="field">
          <label class="label">Current Student Loans</label>
          <div class="control">
            <input class="input" type="text" placeholder="$">
          </div>
        </div>

        <div class="field">
          <label class="label">Number of Dependents</label>
          <div class="control">
            <input class="input" type="text" placeholder="$">
          </div>
        </div>

        <div class="field">
          <label class="label">Gender</label>
          <div class="control">
            <div class="select">
              <select>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button @click='submit' class="button is-primary is-pulled-right">Submit</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  methods: {
    submit() {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.form-container {
  width: 500px;
}
</style>
