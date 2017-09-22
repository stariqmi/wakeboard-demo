<template>
  <div id="app">
    <section class="section">
      <div id="form" class="form-container">
        <div class="field">
          <label class="label">Home Zip</label>
          <div class="control">
            <input v-model='home_zip' class="input" type="text" placeholder="Zip Code">
          </div>
        </div>
        
        <div class="field">
          <label class="label">All Zip Codes between first and current</label>
          <div class="control">
            <input v-model='previous_zips' class="input" type="text" placeholder="Zip Codes">
          </div>
        </div>

        <!--
        <div id="add" class="field add-zip">
          <div class="control">
            <button @click='add' class="button is-primary is-pulled-right">Add</button>
          </div>
        </div>
        -->

        <div class="field">
          <label class="label">Current Zip</label>
          <div class="control">
            <input v-model='current_zip' class="input" type="text" placeholder="Zip Code">
          </div>
        </div>

        <div class="field">
          <label class="label">Current Salary</label>
          <div class="control">
            <input v-model='current_salary' class="input" type="text" placeholder="$">
          </div>
        </div>

        <div class="field">
          <label class="label">Current Rent/Mortgage</label>
          <div class="control">
            <input v-model='current_rent_or_mortgage' class="input" type="text" placeholder="$">
          </div>
        </div>

        <div class="field">
          <label class="label">Current Student Loans</label>
          <div class="control">
            <input v-model='current_student_loans' class="input" type="text" placeholder="$">
          </div>
        </div>

        <div class="field">
          <label class="label">Number of Dependents</label>
          <div class="control">
            <input v-model='number_of_dependents' class="input" type="text" placeholder="$">
          </div>
        </div>

        <div class="field">
          <label class="label">Gender</label>
          <div class="control">
            <div class="select">
              <select v-model='gender' >
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
import request from 'superagent'
import Hello from './components/Hello'

export default {
  name: 'app',
  data: {
    home_zip: '',
    current_zip: '',
    previous_zips: '',
    current_salary: 0,
    current_student_loans: 0,
    current_rent_or_mortgage: 0,
    number_of_dependents: 0,
    gender: ''
  },
  components: {
    Hello
  },
  methods: {
    submit() {
      request.post('/submission')
        .send({
          home_zip: this.home_zip,
          current_zip: this.current_zip,
          previous_zips: this.previous_zips,
          current_salary: parseInt(this.current_salary),
          current_student_loans: parseInt(this.current_student_loans),
          current_rent_or_mortgage: parseInt(this.current_rent_or_mortgage),
          number_of_dependents: parseInt(this.number_of_dependents),
          gender: this.gender,
        })
        .then((res) => {

        })
    },
    add() {
      const container = document.getElementById('form')
      const addBtn = document.getElementById('add')
      
      /*
      <div class="control is-expanded">
        <input class="input" type="text" placeholder="Zip Code">
      </div>
      */
      
      const field = document.createElement('div')
      field.setAttribute('class', 'field')

      const control = document.createElement('div')
      control.setAttribute('class', 'control')

      const input = document.createElement('input')
      input.setAttribute('class', 'input')
      input.setAttribute('type', 'text')
      input.setAttribute('placeholder', 'Zip Code')

      field.appendChild(control)
      control.appendChild(input)
      container.insertBefore(field, addBtn)
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

#add {
  margin-bottom: 50px;
}
</style>
