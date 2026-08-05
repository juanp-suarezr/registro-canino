<template>
  <Head title="Busqueda de caninos perdidos">
    <link rel="preload" href="/assets/img/apoyoCanino.jpg" as="image" />
  </Head>

  <PageLayout>
    <!-- ============================================================ -->
    <!-- HERO                                                         -->
    <!-- ============================================================ -->
    <div       class="flex items-center justify-center py-6 mt-0 mb-8 bg-gradient-to-r from-primary to-secondary rounded-b-[2.5rem] shadow-lg">
      <h1 class="text-4xl sm:text-5xl font-bold text-white drop-shadow-sm">🐕 Caninos perdidos</h1>
    </div>

    <div class="container mx-auto sm:px-12 px-3">
      <!-- ============================================================ -->
      <!-- BOTONES DE ACCIÓN (siempre arriba)                          -->
      <!-- ============================================================ -->
      <div class="my-6 rounded-2xl bg-white p-6 sm:p-8 shadow-md">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900">¿Perdiste o encontraste un animal de compañía?</h2>
        <p class="mt-2 text-gray-700 leading-relaxed">
          Comparte fotos e información para reportar mascotas perdidas o encontradas y ayudar a que regresen a casa.
        </p>

        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button @click="router.visit(route('reportar.perdido', 'Canino-perdido'))" class="group flex items-center gap-3 rounded-xl border border-primary/20 bg-red-50 p-4 text-left transition hover:border-primary hover:bg-white">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-2xl transition group-hover:scale-105">
              🐾
            </span>
            <span class="flex-1">
              <span class="block text-base font-semibold text-gray-900">Encontré un perro perdido</span>
              <span class="block text-sm text-gray-600">Repórtalo aquí para ayudar a encontrar a su dueño.</span>
            </span>
            <span class="text-xl text-primary transition group-hover:translate-x-1">→</span>
          </button>
          <button @click="router.visit(route('reportar.perdido', 'Propietario'))" class="group flex items-center gap-3 rounded-xl border border-secondary/20 bg-red-50 p-4 text-left transition hover:border-secondary hover:bg-white">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-2xl transition group-hover:scale-105">🔍</span>
            <span class="flex-1">
              <span class="block text-base font-semibold text-gray-900">Perdí a mi perro</span>
              <span class="block text-sm text-gray-600">Solicita ayuda con fotos y datos del animal.</span>
            </span>
            <span class="text-xl text-secondary transition group-hover:translate-x-1">→</span>
          </button>
        </div>

        <div class="mt-3">
          <button @click="router.visit(route('perdidos.resueltos'))" class="group flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3.5 text-left transition hover:border-amber-400 hover:bg-white w-full sm:w-auto">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl transition group-hover:scale-105">🐾</span>
            <span class="flex-1">
              <span class="block text-sm font-semibold text-gray-900">Perritos felices</span>
              <span class="block text-xs text-gray-600">Historias con final feliz.</span>
            </span>
            <span class="text-amber-600 transition group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- LAYOUT PRINCIPAL: SIDEBAR + CONTENIDO (e-commerce style)     -->
      <!-- ============================================================ -->
      <div class="flex flex-col lg:flex-row gap-6 my-6">

        <!-- ============================================================ -->
        <!-- SIDEBAR DE FILTROS (left on lg+, top on mobile)              -->
        <!-- ============================================================ -->
        <aside class="w-full lg:w-72 xl:w-80 flex-shrink-0">

          <!-- Botón toggle en móvil (solo visible en < lg) -->
          <div class="lg:hidden mb-3">
            <button @click="filtrosExpandidos = !filtrosExpandidos"
                    class="w-full flex items-center justify-between gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:bg-gray-50 transition"
            >
              <span class="flex items-center gap-2 font-semibold text-gray-800">
                <span>🔎</span> Filtros de búsqueda
                <span v-if="filtrosActivos > 0" class="ml-1 bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full">{{ filtrosActivos }}</span>
              </span>
              <svg class="w-5 h-5 text-gray-500 transition-transform" :class="filtrosExpandidos ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <!-- Panel de filtros:
               - En mobile (< lg): se muestra/oculta con v-show según filtrosExpandidos
               - En lg+: siempre visible
          -->
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            :class="filtrosExpandidos ? 'block' : 'hidden lg:block'"
          >
            <!-- Header del sidebar (solo en desktop) -->
            <div class="hidden lg:flex items-center justify-between p-4 border-b border-gray-100">
              <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span>🔎</span> Filtros
                <span v-if="filtrosActivos > 0" class="ml-1 bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full">{{ filtrosActivos }}</span>
              </h3>
               <button @click="limpiarFiltros" v-if="filtrosActivos > 0" class="text-xs text-primary hover:text-primary/80 font-medium transition">
                Limpiar todo
              </button>
            </div>

            <div class="p-4 space-y-5">
              <!-- Buscar -->
              <div>
                <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Buscar</label>
                <div class="relative">
                  <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" v-model="filtroSearch" placeholder="Nombre, reportante o lugar..."                   class="w-full border border-gray-200 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition" @keyup.enter="aplicarFiltros" />
                </div>
              </div>

              <!-- Quién reporta -->
              <div>
                <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Quién reporta</label>
                <select v-model="filtroOrigen"                   class="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition bg-white" @change="aplicarFiltros">
                  <option value="">Todos</option>
                  <option value="ciudadano">🧑 Ciudadano</option>
                  <option value="policia">👮 Policía</option>
                  <option value="hospivet">🏥 Hospivet</option>
                  <option value="clinica">🏪 Clínica</option>
                  <option value="fundacion">🤝 Fundación</option>
                </select>
              </div>

              <!-- Tipo -->
              <div>
                <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Tipo</label>
                <select v-model="filtroTipo"                   class="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition bg-white" @change="aplicarFiltros">
                  <option value="">Todos</option>
                  <option value="Propietario">🔍 Mascota perdida</option>
                  <option value="Canino perdido">🐾 Mascota reportada</option>
                </select>
              </div>

              <!-- Fecha desde -->
              <div>
                <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Fecha desde</label>
                 <input type="date" v-model="filtroFechaDesde" class="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition" @change="aplicarFiltros" />
              </div>

              <!-- Fecha hasta -->
              <div>
                <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Fecha hasta</label>
                 <input type="date" v-model="filtroFechaHasta" class="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition" @change="aplicarFiltros" />
              </div>

              <!-- Botones de acción -->
              <div class="flex gap-2 pt-2">
                <button @click="aplicarFiltros" class="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition shadow-md hover:shadow-lg">
                  Buscar
                </button>
                <button @click="limpiarFiltros" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg transition border border-gray-200">
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        </aside>

        <!-- ============================================================ -->
        <!-- CONTENIDO PRINCIPAL (resultados)                             -->
        <!-- ============================================================ -->
        <main class="flex-1 min-w-0">

          <!-- Estado / total de resultados -->
          <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
            <p class="text-sm text-gray-500">
              <template v-if="perdidos.data && perdidos.data.length > 0">
                <span class="font-semibold text-gray-800">{{ perdidos.total || perdidos.data.length }}</span> resultado<span v-if="(perdidos.total || perdidos.data.length) !== 1">s</span> encontrado<span v-if="(perdidos.total || perdidos.data.length) !== 1">s</span>
              </template>
              <template v-else>
                No hay resultados
              </template>
            </p>
            <div v-if="filtrosActivos > 0" class="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
              <span class="hidden sm:inline">Filtros activos:</span>
              <span v-if="filtroSearch" class="bg-primary/10 text-primary px-2 py-0.5 rounded-full">{{ filtroSearch }}</span>
              <span v-if="filtroOrigen" class="bg-primary/10 text-primary px-2 py-0.5 rounded-full">{{ origenLabel(filtroOrigen) }}</span>
              <span v-if="filtroTipo" class="bg-primary/10 text-primary px-2 py-0.5 rounded-full">{{ filtroTipo === 'Propietario' ? 'Mascota perdida' : 'Mascota reportada' }}</span>
              <span v-if="filtroFechaDesde" class="bg-primary/10 text-primary px-2 py-0.5 rounded-full">Desde {{ filtroFechaDesde }}</span>
              <span v-if="filtroFechaHasta" class="bg-primary/10 text-primary px-2 py-0.5 rounded-full">Hasta {{ filtroFechaHasta }}</span>
            </div>
          </div>

          <!-- ============================================================ -->
          <!-- GRILLA DE RESULTADOS                                        -->
          <!-- ============================================================ -->
          <template v-if="perdidos.data && perdidos.data.length > 0">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <div
                v-for="item in perdidos.data"
                :key="item.id"
                class="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <!-- ========== SECCIÓN DE FOTOS ========== -->
                <div class="relative flex-shrink-0">
                  <div
                    class="w-full h-52 bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden"
                    @click="(item.fotos_urls || []).length > 0 ? abrirLightbox(item, imagenActiva[item.id] || 0) : null"
                  >
                    <img
                      v-if="(item.fotos_urls || []).length > 0"
                      :src="(item.fotos_urls || [])[imagenActiva[item.id] || 0]"
                      :alt="item.nombre"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                    <div v-else class="flex flex-col items-center justify-center text-gray-400">
                      <svg class="w-16 h-16 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <span class="text-lg font-medium">Sin foto disponible</span>
                      <span class="text-sm">Ayúdanos agregando una imagen</span>
                    </div>
                  </div>

                  <!-- Tag tipo -->
                  <div
                    class="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
                    :class="item.tipo == 'Propietario' ? 'bg-rose-500 text-white' : 'bg-amber-600 text-white'"
                  >
                    <span>{{ item.tipo == 'Propietario' ? '🔍' : '🐾' }}</span>
                    <span>{{ item.tipo == 'Propietario' ? 'PERDIDO' : 'REPORTADO' }}</span>
                  </div>

                  <!-- Contador fotos -->
                  <div
                    v-if="(item.fotos_urls || []).length > 1"
                    class="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-xs px-2.5 py-1 rounded-full"
                  >
                    {{ (imagenActiva[item.id] || 0) + 1 }}/{{ item.fotos_urls.length }}
                  </div>

                  <!-- Miniaturas -->
              <div
                v-show="(item.fotos_urls || []).length > 1"
                class="flex gap-1.5 px-3 py-2.5 bg-white/90 overflow-x-auto"
              >
                    <img
                      v-for="(url, idx) in item.fotos_urls"
                      :key="idx"
                      :src="url"
                      :alt="'Foto ' + (idx + 1)"
                      class="h-12 w-12 object-cover rounded-lg border-2 cursor-pointer flex-shrink-0 transition-all duration-200"
                       :class="(imagenActiva[item.id] || 0) === idx ? 'border-primary opacity-100' : 'border-transparent opacity-70 hover:opacity-100'"
                      @click="imagenActiva[item.id] = idx"
                    />
                  </div>
                </div>

                <!-- ========== INFORMACIÓN ========== -->
                <div class="p-4 space-y-2 text-base flex-1 overflow-hidden">
                  <div
                    class="text-xs font-semibold px-2.5 py-1 rounded-lg inline-block"
                    :class="item.tipo == 'Propietario' ? 'bg-rose-100 text-rose-800' : 'bg-primary/10 text-primary'"
                  >
                    <span class="mr-1">{{ formatDate(item.fecha_hora) }}</span>
                    <br>
                    <template v-if="item.tipo == 'Propietario'">
                      🔍 El dueño reportó su mascota como perdida
                    </template>
                    <template v-else>
                      🐾 {{ origenQuienReporta(item) }} reportó un animal extraviado
                    </template>
                  </div>

                  <div v-if="item.nombre" class="text-base font-bold text-gray-900 truncate transition-colors group-hover:text-primary">
                    {{ item.nombre }}
                  </div>

                  <div v-if="item.raza" class="text-gray-700 text-sm"><span class="font-semibold text-gray-900">Raza:</span> {{ truncate(item.raza, 60) }}</div>
                  <div v-if="item.color" class="text-gray-700 text-sm"><span class="font-semibold text-gray-900">Color:</span> {{ truncate(item.color, 60) }}</div>
                  <div v-if="item.tamano_label" class="text-gray-700 text-sm"><span class="font-semibold text-gray-900">Tamaño:</span> {{ item.tamano_label }}</div>
                  <div v-if="item.lugar" class="text-gray-700 text-sm"><b>{{ item.tipo == 'Propietario' ? 'Lugar de residencia:' : 'Visto en:' }}</b> {{ truncate(item.lugar, 60) }}</div>

                  <div v-if="item.descripcion">
                    <b>Descripción:</b>
                    <span v-if="item.descripcion.length > 60">
                      {{ item.descripcion.substring(0, 60) }}...
                       <button @click="abrirDetalle(item)" class="text-primary hover:text-primary/80 font-semibold text-sm ml-1">Ver más</button>
                    </span>
                    <span v-else>{{ item.descripcion }}</span>
                  </div>

                  <div v-if="item.estado_encuentra_label"><b>Estado:</b> {{ item.estado_encuentra_label }}</div>
                  <div v-if="item.estado_encuentra" class="text-sm text-gray-600 italic">{{ descripcionEstado(item.estado_encuentra) }}</div>
                </div>

                <!-- Botón -->
                <div class="p-4 pt-0 flex justify-center">
                  <button
                    type="button"
                    @click="abrirDetalle(item)"
                    class="bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-white text-sm px-4 py-2 rounded-lg shadow transition-all duration-200 hover:shadow-md w-full"
                  >
                    Ver detalle completo
                  </button>
                </div>
              </div>
            </div>

            <!-- Paginación -->
            <div class="mt-8 flex justify-center" v-if="perdidos.links && perdidos.links.length > 3">
              <Pagination :links="perdidos.links" />
            </div>
          </template>

          <template v-else>
            <div class="my-12 rounded-2xl border-2 border-dashed border-primary/20 bg-gradient-to-b from-primary/5 to-white p-10 text-center">
              <div class="text-5xl mb-3">🐾</div>
              <p class="text-xl sm:text-2xl font-bold text-gray-800">Aún no hay reportes</p>
              <p class="mt-2 text-sm text-gray-500 max-w-sm mx-auto">Usa los botones de arriba para crear el primero y ayudar a que más perritos encuentren su camino a casa.</p>
              <div class="mt-4 flex justify-center gap-2 text-xl">🐕 🐩 🐕‍🦺</div>
            </div>
          </template>
        </main>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- MODAL DE DETALLE COMPLETO                                    -->
    <!-- ============================================================ -->
    <div class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
         @click.self="cerrarDetalle"
         v-if="detalleVisible"
    >
      <div class="bg-white rounded-2xl shadow-2xl shadow-gray-300/40 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-x-hidden border border-gray-100">
        <div class="flex justify-between items-center p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white flex-shrink-0">
          <div class="flex items-center gap-2">
            <h2 v-if="detalleData.nombre" class="text-lg font-bold text-gray-800">{{ detalleData.nombre }}</h2>
             <div class="text-xs font-bold px-3 py-1.5 rounded-full shadow-md" :class="detalleData.tipo == 'Propietario' ? 'bg-rose-500 text-white' : 'bg-secondary text-white'">
              {{ detalleData.tipo == 'Propietario' ? '🔍 MASCOTA PERDIDA' : '🐾 ANIMAL REPORTADO' }}
            </div>
          </div>
          <button class="text-gray-500 hover:text-gray-800 text-2xl transition-transform hover:rotate-90" @click="cerrarDetalle">✕</button>
        </div>

        <div class="flex-1 overflow-y-auto p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div class="w-full h-64 md:h-72 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden" @click="abrirLightbox(detalleData, detalleIndexActivo)">
                <img v-if="(detalleData.fotos_urls || []).length > 0" :src="(detalleData.fotos_urls || [])[detalleIndexActivo]" alt="Foto principal" class="w-full h-full object-contain hover:opacity-90 transition" />
                <span v-else class="text-gray-400">Sin foto</span>
              </div>
              <div v-if="(detalleData.fotos_urls || []).length > 1" class="flex gap-2 mt-2 overflow-x-auto pb-1">
                 <img v-for="(url, idx) in detalleData.fotos_urls" :key="idx" :src="url" :alt="'Mini ' + (idx + 1)" class="w-14 h-14 object-cover rounded-lg border-2 cursor-pointer flex-shrink-0" :class="detalleIndexActivo === idx ? 'border-primary ring-2 ring-primary/40' : 'border-gray-200 opacity-70 hover:opacity-100'" @click="detalleIndexActivo = idx" />
              </div>
              <p class="text-sm text-gray-500 mt-2">Reportado: {{ formatDate(detalleData.created_at) }}</p>
            </div>

            <div class="space-y-3 text-sm break-words">
              <div class="text-sm font-semibold px-3 py-2 rounded-xl inline-block" :class="detalleData.tipo == 'Propietario' ? 'bg-rose-100 text-rose-800' : 'bg-primary/10 text-primary'">
                <template v-if="detalleData.tipo == 'Propietario'">🔍 {{ origenQuienReporta(detalleData) }} reportó su mascota como perdida</template>
                <template v-else>🐾 {{ origenQuienReporta(detalleData) }} reportó un animal extraviado</template>
              </div>
              <div><b>Nombre del reportante:</b><p class="break-words text-gray-800">{{ detalleData.nombre_reportante }}</p></div>
              <div><b>Contacto:</b><p class="text-primary font-semibold break-words">{{ detalleData.contacto }}</p></div>
              <div v-if="detalleData.email"><b>Email:</b><p class="break-words text-gray-700">{{ detalleData.email }}</p></div>
              <hr class="border-gray-100" />
              <div><b>Raza:</b><p class="break-words text-gray-700">{{ detalleData.raza || 'No especificada' }}</p></div>
              <div v-if="detalleData.color"><b>Color:</b><p class="break-words text-gray-700">{{ detalleData.color }}</p></div>
              <div><b>Tamaño:</b><p class="break-words text-gray-700">{{ detalleData.tamano_label || 'No especificado' }}</p></div>
              <div v-if="detalleData.particularidades"><b>Particularidades:</b><p class="break-words text-gray-700">{{ detalleData.particularidades }}</p></div>
              <div><b>Estado físico:</b><p class="break-words text-gray-700">{{ detalleData.estado_encuentra_label || 'No especificado' }}</p></div>
              <div v-if="detalleData.estado_encuentra" class="text-xs text-gray-500 italic">{{ descripcionEstado(detalleData.estado_encuentra) }}</div>
              <hr class="border-gray-100" />
              <div><b>{{ detalleData.tipo == 'Propietario' ? 'Lugar de residencia:' : 'Visto en:' }}</b><p class="break-words text-gray-700">{{ detalleData.lugar }}</p></div>
              <div><b>Fecha del incidente:</b><p class="break-words text-gray-700">{{ formatDate(detalleData.fecha_hora) }}</p></div>
              <hr class="border-gray-100" />
              <div><b>Descripción:</b><p class="text-gray-600 mt-1 break-words whitespace-pre-line">{{ detalleData.descripcion }}</p></div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 p-3 flex justify-end gap-2 bg-gray-50 flex-shrink-0">
          <button @click="cerrarDetalle" class="px-4 py-2 bg-white hover:bg-gray-100 border border-gray-200 rounded-lg text-sm transition">Cerrar</button>
        </div>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- LIGHTBOX                                                     -->
    <!-- ============================================================ -->
    <div v-if="lightboxVisible" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60]" @click.self="cerrarLightbox">
      <button class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10" @click="cerrarLightbox">✕</button>
      <img :src="lightboxUrls[lightboxIndex]" class="max-w-[92vw] max-h-[88vh] object-contain" @click.stop />
      <button v-if="lightboxUrls.length > 1 && lightboxIndex > 0" class="absolute left-4 text-white text-5xl hover:text-gray-300 drop-shadow-lg" @click="lightboxIndex--">‹</button>
      <button v-if="lightboxUrls.length > 1 && lightboxIndex < lightboxUrls.length - 1" class="absolute right-4 text-white text-5xl hover:text-gray-300 drop-shadow-lg" @click="lightboxIndex++">›</button>
      <div class="absolute bottom-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">{{ lightboxIndex + 1 }} / {{ lightboxUrls.length }}</div>
      <div v-if="lightboxUrls.length > 1" class="absolute bottom-14 flex gap-2 overflow-x-auto max-w-[90vw] pb-1">
        <img v-for="(url, idx) in lightboxUrls" :key="idx" :src="url" class="w-12 h-12 object-cover rounded border-2 cursor-pointer" :class="lightboxIndex === idx ? 'border-white opacity-100' : 'border-gray-500 opacity-50 hover:opacity-80'" @click="lightboxIndex = idx" />
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { Head, router } from "@inertiajs/vue3";
import { ref, inject, reactive, computed } from "vue";
import PageLayout from "@/Layouts/PageLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import dayjs from "dayjs";

AOS.init();

const props = defineProps({
  perdidos: { type: Object, default: () => ({ data: [], links: [] }) },
  filters: { type: Object, default: () => ({}) },
});

// ============================================================
// FILTROS DE BÚSQUEDA
// ============================================================
const filtroSearch = ref(props.filters?.search || "");
const filtroOrigen = ref(props.filters?.origen || "");
const filtroTipo = ref(props.filters?.tipo || "");
const filtroFechaDesde = ref(props.filters?.fecha_desde || "");
const filtroFechaHasta = ref(props.filters?.fecha_hasta || "");

const filtrosActivos = computed(() => {
  let count = 0;
  if (filtroSearch.value) count++;
  if (filtroOrigen.value) count++;
  if (filtroTipo.value) count++;
  if (filtroFechaDesde.value) count++;
  if (filtroFechaHasta.value) count++;
  return count;
});

const origenLabel = (valor) => {
  const labels = {
    ciudadano: "Ciudadano",
    policia: "Policía",
    hospivet: "Hospivet",
    clinica: "Clínica",
    fundacion: "Fundación",
  };
  return labels[valor] || valor;
};

const aplicarFiltros = () => {
  router.get("/busqueda-perdidos", {
    search: filtroSearch.value || null,
    origen: filtroOrigen.value || null,
    tipo: filtroTipo.value || null,
    fecha_desde: filtroFechaDesde.value || null,
    fecha_hasta: filtroFechaHasta.value || null,
  }, {
    preserveState: true,
    replace: true,
  });
};

const limpiarFiltros = () => {
  filtroSearch.value = "";
  filtroOrigen.value = "";
  filtroTipo.value = "";
  filtroFechaDesde.value = "";
  filtroFechaHasta.value = "";
  aplicarFiltros();
};

const imagenActiva = reactive({});

const filtrosExpandidos = ref(false);

// Modal detalle
const detalleVisible = ref(false);
const detalleData = ref({});
const detalleIndexActivo = ref(0);

const abrirDetalle = (data) => {
  detalleData.value = data;
  detalleIndexActivo.value = imagenActiva[data.id] || 0;
  detalleVisible.value = true;
};

const cerrarDetalle = () => {
  detalleVisible.value = false;
  detalleData.value = {};
};

// Lightbox
const lightboxVisible = ref(false);
const lightboxUrls = ref([]);
const lightboxIndex = ref(0);

const abrirLightbox = (data, index = 0) => {
  const urls = data.fotos_urls || [];
  if (urls.length === 0) return;
  lightboxUrls.value = urls;
  lightboxIndex.value = index;
  lightboxVisible.value = true;
};

const cerrarLightbox = () => {
  lightboxVisible.value = false;
  lightboxUrls.value = [];
};

// Utilidades
const truncate = (text, max = 60) => {
  if (!text) return "";
  return text.length > max ? text.substring(0, max) + "..." : text;
};

const formatDate = (date) => {
  if (!date) return "N/A";
  return dayjs(date).format("DD/MM/YYYY h:mm A");
};

const origenQuienReporta = (data) => {
  const origenes = {
    ciudadano: "Un CIUDADANO",
    policia: "La POLICÍA",
    hospivet: "HOSPIVET",
    clinica: "Una CLÍNICA veterinaria",
    fundacion: "Una FUNDACIÓN",
  };
  if (data.tipo === 'Propietario') return 'El DUEÑO';
  return origenes[data.origen] || 'Un CIUDADANO';
};

const descripcionEstado = (estado) => {
  const descripciones = {
    muy_bien: "Sano, limpio, cuidado y parece haberse extraviado hace poco.",
    bien: "Sano, pero está algo sucio o despeinado; puede llevar un par de días en la calle.",
    regular: "Flaco, con hambre, sed o desorientado, pero sin heridas ni dolor evidente.",
    delicado: "Flaco, débil o visiblemente demacrado, aunque no presenta lesiones abiertas.",
    herido_enfermo: "Tiene heridas, cojea, sangra o muestra signos claros de dolor o enfermedad.",
  };
  return descripciones[estado] || "";
};
</script>
