import swaggerAutogen from 'swagger-autogen';
import configEnvi from './config';
import moment from 'moment';

const outputFile = './src/swagger-output.json';
const endpointsFiles = ['./src/app.js'];

const doc = {
  swagger: '2.0',
  info: {
    openapi: '2.0.0',
    version: '1.0.0',
    title: 'REST API Previser',
    description: 'Its documentation to app',
    docExpansion: 'none'
  },
  securityDefinitions: { apiKeyAuth: { type: 'apiKey', in: 'header', name: 'x-access-token' } },
  docExpansion: 'none',
  schemes: ['http', 'https'],
  host: `localhost:${configEnvi.port}`,
  definitions: {
    Authorization: {
      username: 'any',
      password: 'any',
      rols: [0, 0],
      sede_id: 0,
      u_codigo: 0,
      primer_nombre: 'any',
      segundo_nombre: 'any',
      primer_apellido: 'any',
      segundo_apellido: 'any',
      n_documento: 0,
      direccion: 'any',
      rh: 'any',
      tipo_documento: 'any',
      estado_civil: 'any',
      genero: 'any',
      correo: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Asegurado: {
      nombre: 'any',
      descripcion: 'any',
      ocupacion: 'any',
      edad: 0,
      auxilio_id: 0,
      parentesco_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Auxilio: {
      nombre: 'any',
      descripcion: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Barrio: {
      comuna_id: 0,
      estrato: 0,
      nombre: 'any',
      tipo_zona: 'string',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Beneficio: {
      nombre: 'any',
      estado: 'activo',
      categoria_beneficio: 0,
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Cartera: {
      cupo_id: 0,
      valor: 0,
      saldo: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    CarteraMovimiento: {
      cartera_id: 0,
      c_naturaleza_id: 0,
      nota_credito_id: 0,
      detalle_pago: 0,
      valor: 0,
      concepto: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    CategoriaBeneficio: {
      nombre: 'any',
      descripcion: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    CategoriaNota: {
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Cliente: {
      barrio_id: 0,
      seguro_id: 0,
      tipo_documento: 'any',
      n_documento: 0,
      primer_nombre: 'any',
      segundo_nombre: 'any',
      primer_apellido: 'any',
      segundo_apellido: 'any',
      genero: 'any',
      correo: 'any',
      direccion: 'any',
      f_nacimiento: moment().format(),
      tipo_vivienda: 'any',
      actividad_economica: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    CategoriaNaturaleza: {
      nombre: 'any',
      acronimo: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Comuna: {
      zona_id: 0,
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    CategoriaProducto: {
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Credencial: {
      nombre: 'any',
      descripcion: 'any',
      tiempo: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Cupo: {
      cliente_id: 0,
      empresa_id: 0,
      estado_cupo_id: 0,
      producto_id: 0,
      dia_pago_id: 0,
      valor: 0,
      direccion_cobro: 'any',
      protege: 'any',
      f_vencimiento: moment().format(),
      control_sistema: 0,
      bono_fidelidad: 0,
      bono_pronto_pago: 0,
      premiacion: 0,
      transporte: 'any',
      descripcion: 'any',
      finanzas: 'any',
      gestor: 'any',
      bienestar: 'any',
      origen: 'any',
      obsequio: false,
      referencia_producto: 'any',
      prod_item: 0,
      cod_gestor: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Departamento: {
      codigo: 0,
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    DetalleCredencial: {
      credencial_id: 0,
      cupo_id: 0,
      parentesco_id: 0,
      entregado: false,
      n_credencial: 0,
      delegado: 'any',
      nom_recibe: 'any',
      f_vencimiento: moment().format(),
      n_documento: 0,
      u_codigo: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    DetalleReferencia: {
      valor_total: 0,
      valor_inicial: 0,
      valor_carnet: 0,
      c_asegurado: 0,
      c_mascota: 0,
      aporte_adicional: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    DetalleUsuario: {
      sede_id: 0,
      usuario_id: 0,
      u_codigo: 0,
      primer_nombre: 'any',
      segundo_nombre: 'any',
      primer_apellido: 'any',
      segundo_apellido: 'any',
      n_documento: 0,
      direccion: 'any',
      rh: 'any',
      tipo_documento: 'any',
      estado_civil: 'any',
      genero: 'any',
      correo: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Empresa: {
      nombre: 'any',
      telefono: 0,
      correo: 'any',
      c_personas: 0,
      sucursal: 'any',
      rut: 0,
      nit: 0,
      camara_comercio: 'any',
      certificacion_bancaria: 'any',
      nombre_contacto: 'any',
      documento: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Especie: {
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    EstadoBienestar: {
      nombre: 'any',
      estado_cupo_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    EstadoCupo: {
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    FormaPago: {
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Inventario: {
      descripcion: 'any',
      t_producto_id: 0,
      sede_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Kardex: {
      t_estado: 'any',
      cantidad: 0,
      total: 0,
      valor_unitario: 0,
      valor_total: 0,
      inventario_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Mascota: {
      genero: 'any',
      color: 'any',
      edad: 'any',
      cupo_id: 0,
      especie_id: 0,
      raza_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    MicroEmpresa: {
      cliente_id: 0,
      nombre: 'any',
      direccion: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    MovimientoInventario: {
      nota: 'any',
      descripcion: 'any',
      m_naturaleza: 'any',
      cantidad: 0,
      serie: 'any',
      valor_unitario: 0,
      valor_total: 0,
      rango_inicial: 0,
      rango_final: 0,
      consecutivo: false,
      usuario_encargado: 'any',
      usuario_entregado: 'any',
      confirmacion: false,
      inventario_id: 0,
      proveedor_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Municipio: {
      departamento_id: 0,
      codigo: 0,
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    NegociacionEmpresa: {
      detalle_negociacion: 'any',
      p_descuento: 0,
      empresa_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Nota: {
      comentario: 'any',
      cupo_id: 0,
      categoria_nota_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Objecion: {
      descripcion: 'any',
      categoria_nota_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Origen: {
      nombre: 'any',
      sede_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Parentesco: {
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Perfil: {
      nombre: 'any',
      descripcion: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Premiacion: {
      n_premiacion: 0,
      f_vencimiento: moment().format(),
      usuario_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Producto: {
      referencia_producto: 'any',
      descripcion: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Proveedor: {
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Prst: {
      nombre: 'any',
      acronimo: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    PuntoBeneficio: {
      descripcion: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Raza: {
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Referencia: {
      detalle_referencia_id: 0,
      nombre: 'any',
      r_numero: 0,
      producto_id: 0,
      prod_item: 0,
      contador_inicial: 0,
      contador_final: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    ReferenciaFamiliar: {
      detalle_usuario_id: 0,
      parentesco_id: 0,
      nombres: 'any',
      primer_apellido: 'any',
      segundo_apellido: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Rol: {
      nombre: 'any',
      descripcion: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Sede: {
      nombre: 'any',
      acronimo: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    SeguridadSocial: {
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Sesion: {
      f_inicio: moment().format(),
      f_final: moment().format(),
      usuario_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Telefono: {
      detalle_usuario_id: 0,
      referencia_familiar_id: 0,
      cliente_id: 0,
      tipo_telefono: 'any',
      numero: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    TipoZona: {
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    TipoProducto: {
      nombre: 'any',
      descripcion: 'any',
      consecutivo: false,
      c_producto_id: 0,
      prst_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Usuario: {
      username: 'any',
      password: 'string',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Vehiculo: {
      f_soat: moment().format(),
      f_tecnicomecanica: moment().format(),
      placa_vehiculo: 'any',
      vehiculo: 'any',
      detalle_usuario_id: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    Zona: {
      t_zona_id: 0,
      municipio_id: 0,
      nombre: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    DetallePago: {
      forma_pago_id: 0,
      valor: 0,
      cupo: 0,
      imagen: 'any',
      n_usuario: 'any',
      n_registro: 'any',
      n_documento: 0,
      n_cliente: 'any',
      referencia_producto: 'any',
      prod_item: 0,
      u_codigo: 0,
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format()
    },
    DiaPago: {
      tiempo: 0,
      descripcion: 'any',
      estado: 'activo',
      created_at: moment().format(),
      updated_at: moment().format(),
      tiempo_extra: 0
    }
  }
};

swaggerAutogen()(outputFile, endpointsFiles, doc);
