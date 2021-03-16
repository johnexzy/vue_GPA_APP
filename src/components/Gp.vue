<template>
  <figure>
    <table style="border: 2px solid" cellpadding="2px" cellspacing="3px" v-if="courses.length > 0">
      <th>Course</th>
      <th>UNITS</th>
      <th>GRADE</th>
      <th v-if="courses.length > 1" style="font-size:12px">DELETE</th>
      <tr
        style="border: 2px solid"
        v-for="(data, index) in courses"
        :key="index"
      >
        <td style="border: none" id="dept">
          Course {{ index +1 }}
        </td>
        <td>
          <input
            class="form-input"
            type="number"
            v-model="data.courseUnit"
            placeholder="Unit Load"
          />
        </td>
        <td>
          <select class="select" v-model="data.grade">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value selected>Grade</option>
          </select>
        </td>
        <td
        v-if="courses.length > 1"
          style="
            text-align: center;
            display: grid;
            justify-items: center;
            padding-top: 5px;
          "
        >
          <!-- <i >&minus;</i> -->
          <img
            @click="remove(index)"
            v-bind:style="removeStyle"
            src="./bad.png"
            alt="kokok"
            style="width: 40%; height: 30px"
          />
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td></td>
        <td @click="addRow()" class="add" id="addrow2">
          <img src="./plus.png" alt="Add" width="30px" height="30px">
        </td>
      </tr>
      <tr>
        <td style="border: none"></td>
        <td align="center" style="border: none">
          <input
            type="button"
            @click="calcGp()"
            id="button1"
            value="Calculate GP"
          />
        </td>
        <td style="border: none"></td>
      </tr>
    </table>
    <div class="holder">
      <p style="color:#fff; font-family:monospace; font-size:15px">Your current GP is <span :style="gpState(1) ? {color: 'gold', fontWeight: 'bold'} : gpState(2) ? {color: 'blue', fontWeight: 'bold'} : gpState(3) ? {color: 'white', fontWeight: 'bold'} : {color: 'red', fontWeight: 'bold'}">{{currentGp}}</span></p>

    </div>
    <footer>
      <div class="footer" style="font:20px Helvetica;color:indigo;">
        <p>copyright © Johnexzy™</p>
      </div>
    </footer>
  </figure>
</template>

<script>

export default {
  name: "Gp",
  data() {
    return {
      validcourses:[],
      bcolor: 0,
      coursename: "",
      courseUnit: 2,
      grade: "A",
      // gpstate:
      removeStyle: {
        color: "#fff",
        // backgroundColor: "#a10",
        borderRadius: "20px",
        width: "20px",
        height: "20px",
        textAlign: "center",
        fontWeight: "700",
        float: "right",
        cursor: "pointer",
        color: "#323333",
      },

      courses: [
        {
          coursename: '',
          courseUnit: ''
        }
        ],
      currentGp: 0.0,
    };
  },
  computed: {},
  mounted(){
    for (let i = 0; i < 16; i++) {
      this.courses.push({coursename: '',courseUnit: ''})
    }
  },
  methods: {
    gpState(state) {
      var gp = this.currentGp;
      if (state == 1) {
        if (gp >= 4.5) return true;
        return false;
      }
      if (state == 2) {
        if (gp >= 3.5 && gp < 4.5) return true;
        return false;
      }
      if (state == 3) {
        if (gp >= 2.5 && gp < 3.5) return true;
        return false;
      }
      if (state == 4) {
        if (gp >= 0 && gp < 2.5) return true;
        return false;
      }
    },
    // addCourse() {
    //   this.courses.unshift({
    //     coursename: this.coursename,
    //     courseUnit: this.courseUnit,
    //     grade: this.grade,
    //   });
    //   this.coursename = "";
    //   // console.log(this.courses);
    //   this.calcGp();
    // },
    addRow() {
      this.courses.push({
        coursename: '',
        courseUnit: '',
        grade: ''
      })
    },
    calcGp() {
      var cumm = [];

      var totalUnit = 0,
        grade = 0,
        acc = 0,
        unit = 0;
      this.validcourses = this.courses.filter(e => e.courseUnit !== '' || e.courseUnit !== 0 || !e.courseUnit)
      for (let i = 0; i < this.validcourses.length; i++) {
        unit = Number(this.validcourses[i].courseUnit);
        totalUnit = Number(this.validcourses[i].courseUnit) + totalUnit;
        switch (this.courses[i].grade) {
          case "A":
            grade = 5;
            break;
          case "B":
            grade = 4;
            break;
          case "C":
            grade = 3;
            break;
          case "D":
            grade = 2;
            break;
          case "E":
            grade = 1;
            break;
          case "F":
            grade = 0;
            break;

          default:
            grade = 0;
            break;
        }
        cumm.push(grade * unit);
      }
      // console.log(totalUnit)
      acc = cumm.reduce((acc, elem) => acc + elem, 0);
      this.currentGp = (totalUnit == 0) ? 0 : (acc / totalUnit).toFixed(2);
    },
    remove(id) {
      this.courses.splice(id, 1);
      this.calcGp();
    },
  },
};
</script>
