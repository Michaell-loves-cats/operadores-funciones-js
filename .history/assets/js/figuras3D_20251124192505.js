
// Código para leer inputs del usuario y calcular figuras 3D
const PI = 3.141592653589793;

function toNumber(value) {
	const n = Number(value);
	return Number.isFinite(n) ? n : 0;
}


	const a = toNumber(document.getElementById('input-a').value);
	const b = toNumber(document.getElementById('input-b').value);
	const h = toNumber(document.getElementById('input-h').value);
	const r = toNumber(document.getElementById('input-r').value);

	// Cono
	const perimetroCono = 2 * PI * r;
	const areaCono = PI * r * (r + Math.sqrt(h * h + r * r)); // superficie lateral + base
	const volumenCono = (1 / 3) * PI * r * r * h;
	document.getElementById('conoP').textContent = perimetroCono.toFixed(2);
	document.getElementById('conoA').textContent = areaCono.toFixed(2);
	document.getElementById('conoV').textContent = volumenCono.toFixed(2);

	// Paralelepípedo (rectangular) - asumimos dimensiones a, b, h
	const perimetroParalele = 4 * (a + b + h);
	const areaParalele = 2 * (a * b + a * h + b * h);
	const volumenParalele = a * b * h;
	document.getElementById('paraleleP').textContent = perimetroParalele.toFixed(2);
	document.getElementById('paraleleA').textContent = areaParalele.toFixed(2);
	document.getElementById('paraleleV').textContent = volumenParalele.toFixed(2);

	// Cubo (usamos 'a' como arista)
	const perimetroCubo = 12 * a;
	const areaCubo = 6 * a * a;
	const volumenCubo = a * a * a;
	document.getElementById('cuboP').textContent = perimetroCubo.toFixed(2);
	document.getElementById('cuboA').textContent = areaCubo.toFixed(2);
	document.getElementById('cuboV').textContent = volumenCubo.toFixed(2);

	// Esfera (radio r)
	const perimetroEsfera = 2 * PI * r;
	const areaEsfera = 4 * PI * r * r;
	const volumenEsfera = (4 / 3) * PI * r * r * r;
	document.getElementById('EsferaP').textContent = perimetroEsfera.toFixed(2);
	document.getElementById('EsferaA').textContent = areaEsfera.toFixed(2);
	document.getElementById('EsferaV').textContent = volumenEsfera.toFixed(2);
}

// Añadir listeners a los inputs
['input-a', 'input-b', 'input-h', 'input-r'].forEach(id => {
	const el = document.getElementById(id);
	if (el) el.addEventListener('input', actualizarFiguras);
});

// Ejecutar una vez al cargar (valores vacíos darán 0)
document.addEventListener('DOMContentLoaded', actualizarFiguras);


