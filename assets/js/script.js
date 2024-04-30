const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const gender = getSelectedValue('gender');
  const age = getInputNumberValue('age');
  const weight = getInputNumberValue('weight');
  const height = getInputNumberValue('height');
  const activityLevel = getSelectedValue('activity_level');

  const tmb = Math.round(
    gender === 'female'
      ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age //if (cálculo pronto)
      : 66 + 13.7 * weight + 5 * height - 6.8 * age //else
  );

  const maintenance = Math.round(tmb * Number(activityLevel));
  const loseWeight = maintenance - 300;
  const gainWeight = maintenance + 300;

  //resultados da cálculo para exibir na tela
  const layout = `
    <h2>Seus Resultados:</h2>

    <div class="result-content">
      <ul>
        <li>
          Para MANTER o seu peso atual você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para PERDER peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para GANHAR peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
      <p>Tenha acesso ao GUIA de Cardápios prontos com calorias calculadas de acordo com seu objetivo, <strong><a href="https://guiacardapios.my.canva.site/cardapiosflexiveis" style="color: orange;">CLIQUE AQUI</a></strong>.</p>
    </div>
  `;

  const result = document.getElementById('result');

  result.innerHTML = layout; //repassando que o layout deve ser exibido na tela
}

function getSelectedValue(id) {
  const select = document.getElementById(id);

  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}
