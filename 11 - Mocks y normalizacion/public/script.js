const author = new normalizr.schema.Entity(
  "author",
  {},
  { idAttribute: "userEmail" }
);

const mensaje = new normalizr.schema.Entity(
  "mensaje",
  { author: author },
  { idAttribute: "id" }
);

const schemaMensajes = new normalizr.schema.Entity(
  "mensajes",
  {
    mensajes: [mensaje],
  },
  { idAttribute: "id" }
);
