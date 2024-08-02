function insert_Row() {
    //Write your code here
  const table=document.getElementById('sampleTable');
  let tr=`<tr><td>New Cell1</td> <td>New Cell2</td> </tr>`;
	table.insertRow(0).innerHTML+=tr;
}
