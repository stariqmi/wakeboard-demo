<template lang='pug'>
  #app
    section.hero.is-dark
      .hero-body
        .container
          h1.title What's your Zip Job?
          h2.subtitle Find out if where you work, live & play make you happy.

    section.section.zip-jobs-form
      .form-container
        .field
          label.label Home Zip
          .control
            input.input(v-model='zip_home' type="text" placeholder="Zip Code")

        .field
          label.label Previous Zips
        .field.is-grouped.is-grouped-multiline
          .control
            input.input.is-small(v-model='zip_previous_1' type="text" placeholder="Previous Zip Code 1")
          .control
            input.input.is-small(v-model='zip_previous_2' type="text" placeholder="Previous Zip Code 2")
          .control
            input.input.is-small(v-model='zip_previous_3' type="text" placeholder="Previous Zip Code 3")
          .control
            input.input.is-small(v-model='zip_previous_4' type="text" placeholder="Previous Zip Code 4")
          .control
            input.input.is-small(v-model='zip_previous_5' type="text" placeholder="Previous Zip Code 5")

        .field
          label.label Current Zip
          .control
            input.input(v-model='zip_current' type="text" placeholder="Zip Code")
        
        .field
          label.label Current Salary
          .control
            input.input(v-model='current_salary' type="number" placeholder="$")

        .field
          label.label Rent/Mortgage
          .control
            input.input(v-model='current_rent_mortgage' type="number" placeholder="$")

        .field
          label.label Current Student Loans
          .control
            input.input(v-model='current_student_loans' type="number" placeholder="$")

        .field
          label.label Number of Dependents
          .control
            input.input(v-model='number_of_dependents'  type="number" placeholder="Dependents")

        .field
          label.label Gender
          .control
            .select(v-model='gender')
              select
                option(value="Male" selected) Male
                option(value="Female") Female

        .field
          .control
            button.button.is-primary.is-pulled-right(@click='submit' ref='submit') Submit
</template>

<script>
import request from 'superagent'

export default {
  name: 'app',
  data() {
    return {
      zip_home: '',
      zip_current: '',
      zip_previous_1: '',
      zip_previous_2: '',
      zip_previous_3: '',
      zip_previous_4: '',
      zip_previous_5: '',
      current_salary: 0,
      current_student_loans: 0,
      current_rent_mortgage: 0,
      number_of_dependents: 0,
      gender: '', 
    }
  },
  computed: {
    form_data() {
      return {
        zip_home: this.zip_home,
        zip_current: this.zip_current,
        zip_previous_1: this.zip_previous_1,
        zip_previous_2: this.zip_previous_2,
        zip_previous_3: this.zip_previous_3,
        zip_previous_4: this.zip_previous_4,
        zip_previous_5: this.zip_previous_5,
        current_salary: this.current_salary,
        current_student_loans: this.current_student_loans,
        current_rent_mortgage: this.current_rent_mortgage,
        number_of_dependents: this.number_of_dependents,
        gender: this.gender,
      };
    }
  },
  components: {
  },
  methods: {
    submit() {
      const payload = this.form_data
      const submit_btn = this.$refs.submit

      submit_btn.classList.add('is-loading')
      request.post('/submission')
        .send(payload)
        .then((res) => {
          submit_btn.classList.remove('is-loading')
          
          if (res.body.status === 'ok') {
            // Clear form fields
            this.zip_home = ''
            this.zip_current = ''
            this.zip_previous_1 = ''
            this.zip_previous_2 = ''
            this.zip_previous_3 = ''
            this.zip_previous_4 = ''
            this.zip_previous_5 = ''
            this.current_salary = 0
            this.current_student_loans = 0
            this.current_rent_mortgage = 0
            this.number_of_dependents = 0
            this.gender = 'Male'
          }
        })
      
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
}

.zip-jobs-form {
  display: flex;
  justify-content: center;
}

.form-container {
  width: 500px;
}
</style>
