<script>
  // @ts-nocheck
  var jv = false
  var [asz, n] = [17, { length: 10 }]
  var aknak = Array.from({ length: asz }, (_) => "💣")
    .concat(Array.from({ length: 100 - asz }, (_) => " "))
    .sort((a, b) => Math.random() - 0.5)
  var t = Array.from(n, (_, y) => Array.from(n, (_, x) => aknak[y * 10 + x]))
  const f = (x, y) => {
    let cell = t[y][x]
    if (cell === "💣") cell = `💀`, jv = true, t[y][x] = cell
    else {
      let asz = 0;
      [1, 0, -1].forEach((i) => [1, 0, -1].forEach((j) => 
            (t[y + i] && t[y + i][x + j] === "💣") ||
            (t[y + i] && t[y + i][x + j] === "Z")
          ? asz++ : null
      ))
      t[y][x] = asz
      if (asz == 0) 
        [1, 0, -1].forEach((i) => [1, 0, -1].forEach((j) => 
            (i || j) && t[y + i] && t[y + i][x + j] === " "
              ? f(x + j, y + i) : null
        ))
    }
  }
</script>

<main>
  <h1>Aknakereső</h1>
  {#if jv || !asz}
    {#if jv}<h2>Vesztett</h2>{:else}<h3>Nyert</h3>{/if}
    <table>
      {#each t as row, y}
        <tr>
          {#each row as cell, x}
            <td class="eh {Number(cell) === cell
                ? 'N': cell ==="Z" ? 'Z': cell === "z" ? "z" : cell === '💣'? 'B'
                : cell === '💀' ? 'HF': ''}">{"zZ".includes(cell) ? `📍` : cell}</td>
          {/each}
        </tr>
      {/each}
    </table>
  {:else}
    <table class="eh">
      {#each t as row, y}
        <tr>
          {#each row as cell, x}
            <td
              class="norm {Number(cell) === cell
                ? 'N' : 'Zz'.includes(cell) ? 'Z': ''}"
              on:click={() => f(x, y)}
              on:contextmenu|preventDefault={() => {
                if ("zZ".includes(cell)) {
                  if (cell === "Z") asz++
                  cell = cell === "Z" ? "💣" : " "
                  return
                }
                if (cell === "💣") asz--
                cell = cell === "💣" ? "Z" : "z"
              }}>{cell === "💣" ? " " : "zZ".includes(cell) ? `📍` : cell}</td
            >
          {/each}
        </tr>
      {/each}
    </table>
  {/if}
</main>

<style>
  h2 {
    color:rgb(255, 90, 90);
  }
  h3 {
    color:aquamarine
  }
  table {
    background-color: antiquewhite;
    border-spacing: 8px;
    border-radius: 10px;
    box-shadow: 1px 1px 3px inset black;
  }
  td.eh {
    background-color: rgb(207, 230, 229);
    cursor: default;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    font-size: 24px;
    cursor: pointer;
    background-color: rgb(214, 196, 173);
    border-radius: 8px;
    box-shadow: 1px 1px 3px black;
  }
  td.norm:hover { background-color: lightgray; }
  td.N { background-color: rgb(96, 154, 154); }
  td.Z { background-color: rgb(236, 147, 99); }
  td.z { background-color: rgb(123, 106, 232); }
  td.B { background-color: rgb(183, 75, 75); }
  td.HF { background-color: rgb(97, 7, 7); }
  td.N, td.Z, td.Z, td.HF { box-shadow: 1px 1px 3px inset black; }
</style>
