const tm = document.getElementById("turma");
const pf = document.getElementById("prof");
const ms = document.getElementById("ms");

const dttable = document.querySelector(".tb");
window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#dataTable tbody");

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");

    row.id = `rw${i}`;
    const cell1 = document.createElement("textarea");
    cell1.id = `al${i}`;
    row.appendChild(cell1);

    const cell2 = document.createElement("textarea");
    cell2.id = `ft${i}`;
    row.appendChild(cell2);

    const cell3 = document.createElement("textarea");
    cell3.id = `jt${i}`;
    row.appendChild(cell3);
    tbody.appendChild(row);
  }
});

document.getElementById("savetxt").addEventListener("click", () => {
  const txtname = document.getElementById("txtname");
  const rows = document.querySelectorAll("#dataTable tbody tr");
  let txtContent =
    'Escola: E.M.E.B. "Antonio Joaquim da Silva" \n' +
    "Turma: " +
    tm.value +
    "\n" +
    "Professor: " +
    pf.value +
    "\n" +
    "Mes:" +
    ms.value +
    "\n\n" +
    "Nome do Aluno        |     Dias de Falta                        |     Justificativa \n" +
    "---------------------------------------------------------------\n";

  rows.forEach((row) => {
    const al = row.querySelector(`#al${row.id.replace("rw", "")}`);
    const ft = row.querySelector(`#ft${row.id.replace("rw", "")}`);
    const jt = row.querySelector(`#jt${row.id.replace("rw", "")}`);

    const alText = al ? al.value : "";
    const ftText = ft ? ft.value : "";
    const jtText = jt ? jt.value : "";

    txtContent += `${alText.padEnd(20)} | ${ftText.padEnd(
      40
    )} | ${jtText.padEnd(20)} \n`;
  });

  const blob = new Blob([txtContent], {
    type: "text/plain;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = txtname.value == "" ? "tabela.txt" : `${txtname.value}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});
