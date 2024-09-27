<script>
  // @ts-nocheck
  var jv = false;
  const asz = 15;
  var aknak = Array.from({ length: asz }, (_) => "💣")
    .concat(Array.from({ length: 100 - asz }, (_) => " "))
    .sort((a, b) => Math.random() - 0.5);
  var t = Array.from({ length: 10 }, (_, y) =>
    Array.from({ length: 10 }, (_, x) => aknak[y * 10 + x]),
  );
  const f = (x, y) => {
    let cell = t[y][x];
    if (jv) return;
    if (cell === "💣") {
      cell = `💀`;
      jv = true;
      t[y][x] = cell;
    } else {
      let asz = 0;
      [1, 0, -1].forEach((i) =>
        [1, 0, -1].forEach((j) => {
          if (
            (t[y + i] && t[y + i][x + j] === "💣") ||
            (t[y + i] && t[y + i][x + j] === "Z")
          )
            asz++;
        }),
      );
      t[y][x] = asz;
      if (asz == 0) {
        [1, 0, -1].forEach((i) =>
          [1, 0, -1].forEach((j) => {
            if ((i || j) && t[y + i] && t[y + i][x + j] === " ") {
              f(x + j, y + i);
            }
          }),
        );
      }
    }
  };
</script>

<main>
  <h1>Aknakereső</h1>
  {#if jv}
    <table>
      {#each t as row, y}
        <tr>
          {#each row as cell, x}
            <td class="eh {
                Number(cell) === cell ? "N" : 
                "Zz".includes(cell) ? "Z" : ""
             }">{"zZ".includes(cell) ? `📍` : cell}</td>
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
              class={
                Number(cell) === cell ? "N" : 
                "Zz".includes(cell) ? "Z" : ""
              }
              on:click={() => f(x, y)}
              on:contextmenu|preventDefault={() => {
                if ("zZ".includes(cell)) {
                  cell = " ";
                  return;
                }
                if (cell === "💣") {
                  cell = "Z";
                } else {
                  cell = "z";
                }
              }}>{cell === "💣" ? " " : "zZ".includes(cell) ? `📍` : cell}</td
            >
          {/each}
        </tr>
      {/each}
    </table>
  {/if}
</main>

<style>
  td.eh {
    cursor: default;
    background-color: rgb(186, 165, 139);
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    font-size: 24px;
    cursor: pointer;
    background-color: rgb(150, 138, 123);
    border-radius: 8px;
    box-shadow: 1px 1px 3px inset black;
  }
  td:hover {
    background-color: lightgray;
  }
  td:hover {
    background-color: rgb(186, 165, 139);
  }
  td.N {
    background-color: rgb(17, 101, 101);
  }
  td.Z {
    background-color: rgb(236, 147, 99);
  }
</style>
