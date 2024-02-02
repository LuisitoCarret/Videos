var videos = [
    { titulo: 'Star Wars', descripcion: 'Explicacion del famoso videojuego Jedi Survivor', url: 'https://www.youtube.com/embed/ZS353_vUp9M?si=idrnn-0ZxveTJIcl' },
    { titulo: 'Resumen serie', descripcion: 'Resumen de la serie The Mandalorian', url: 'https://www.youtube.com/embed/fvf7VzPPTHQ?si=ub5Pu7xZtlLM330W' },
    { titulo: 'Accesorios Laptop', descripcion: 'Mejores Recomendaciones para tu laptop', url: 'https://www.youtube.com/embed/YB4-_EMXSkE?si=4gYFekS6jd01jjKB' },
    { titulo: 'Curso Programacion', descripcion: 'Videos que serviran para practicar la programacion', url: 'https://www.youtube.com/embed/AEiRa5xZaZw?si=YJ5hoB4ZmI6bjwSL' }
  ];

  var listaVideos = document.getElementById('listavideosArreglo');
  mostrarListaVideos(videos);

  function mostrarListaVideos(videosBuscados) {
    listaVideos.innerHTML = '';
    videosBuscados.forEach(indiceVideo => {
      var contenedorVideo = document.createElement('div');
      contenedorVideo.setAttribute('class', 'contenedor-video');

      var divVideo = document.createElement('div');
      divVideo.setAttribute('class', 'video');
      var iframeVideo = document.createElement('iframe');
      iframeVideo.setAttribute('src', indiceVideo.url);
      iframeVideo.setAttribute('width', '380px');
      iframeVideo.setAttribute('height', '200px');
      iframeVideo.setAttribute('frameborder', '0');
      divVideo.appendChild(iframeVideo);
      contenedorVideo.appendChild(divVideo);

      var divTexto = document.createElement('div');
      divTexto.setAttribute('class', 'texto');
      var h4TituloVideo = document.createElement('h4');
      h4TituloVideo.textContent = indiceVideo.titulo;
      var h6DescripcionVideo = document.createElement('h6');
      h6DescripcionVideo.textContent = indiceVideo.descripcion;
      divTexto.appendChild(h4TituloVideo);
      divTexto.appendChild(h6DescripcionVideo);
      contenedorVideo.appendChild(divTexto);

      var divBotones = document.createElement('div');
      divBotones.setAttribute('class', 'botones');
      var botonVideo = document.createElement('button');
      botonVideo.setAttribute('class', 'boton btn btn-outline-primary');
      botonVideo.innerHTML = '❤';
      divBotones.appendChild(botonVideo);

      var botonAdicional1 = document.createElement('button');
      botonAdicional1.setAttribute('class', 'boton btn btn-outline-primary');
      botonAdicional1.innerHTML = '🗨';
      divBotones.appendChild(botonAdicional1);

      var botonAdicional2 = document.createElement('button');
      botonAdicional2.setAttribute('class', 'boton btn btn-outline-primary');
      botonAdicional2.innerHTML = '↪';
      divBotones.appendChild(botonAdicional2);

      contenedorVideo.appendChild(divBotones);

      listaVideos.appendChild(contenedorVideo);
    });
  }