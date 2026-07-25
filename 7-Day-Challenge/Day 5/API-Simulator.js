/*
1. async fnx banao
2. 1.5s ka delay lagao
3. agar id mile to students ka naam, marks ka avg, aur grade return karao
4. id na mile to reject karo
5. async-await aur try-catch se call karo dono id's pe - valid or invalid
 */

const database = {
  101: { name: "Piyush", marks: [85, 92, 78, 95, 88] },
  102: { name: "Asmit", marks: [70, 65, 80, 75, 90] },
};

function getGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "E";
  }
}

function getData(key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (database.hasOwnProperty(key)) {
        const student = database[key];
        const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
        const average = totalMarks / student.marks.length;
        const grade = getGrade(average);

        // print required data
        console.log(`Name: ${student.name}`);
        console.log(`Average: ${average.toFixed(2)}`);
        console.log(`Grade: ${grade}`);

        resolve("Data Fetched.");
      } else {
        reject(`Failed to fetch! ${key} not found.`);
      }
    }, 2000);
  });
}

async function showData(key) {
  try {
    const val = await getData(key);
    console.log(val);
    console.log("Done!");
  } catch (err) {
    console.log(err);
  }
}
showData(101);
showData(102);
showData(255);
