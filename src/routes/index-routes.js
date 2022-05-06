import { Router } from 'express';

import rolesRoutes from './rols-routes';
import usuariosRoutes from './usuario-router';
import perfilesRoutes from './perfil-routes';
import detalleUsuarioRoutes from './detalle-usuario-routes';
import authRoutes from './auth-routes';
import sesionesRoutes from './sesiones-routes';
import sedesRoutes from './sedes-routes';
import vehiculosRoutes from './vehiculos-routes';
import SeguridadSocialRoutes from './seguridad-social-routes';
import parentescoRoutes from './parentesco-routes';
import aseguradosRoutes from './asegurados-routes';
import clienteRoutes from './cliente-routes';
import microEmpresaRouter from './microEmpresa-routes';
import departamentoRouter from './departamento-routes';
import municipioRouter from './municipio-routes';
import telefonosRouter from './telefonos-routes';
import referenciaFamiliaresRouter from './referencia_familiares-router';
import auxiliosRoutes from './auxilios-routes';
import origenesRoutes from './origenes-routes';
import premiacionesRoutes from './premiacion-routes';
import negociacionEmpresasRoutes from './negociacion-empresas-routes';
import empresasRoutes from './empresas-routes';
import categoriaNotasRoutes from './categoria-nota-routes';
import objecionesRoutes from './objeciones-routes';
import notasRoutes from './notas-routes';
import categoriaBeneficiosRoutes from './categoria-beneficios-routes';
import beneficiosRoutes from './beneficios-routes';
import puntoBeneficiosRoutes from './punto-beneficios-routes';
import tipoZona from './tipoZona-routes';
import zonaRoutes from './zona-routes';
import comunaRoutes from './comuna-routes';
import barrioRoutes from './barrio-routes';
import referenciaRoutes from './referencia-routes';
import detalleReferenciaRoutes from './detalle-referencia-routes';
import productosRoutes from './productos-routes';
import estadoCuposRoutes from './estado-cupos-routes';
import cupoRoutes from './cupo-routes';
import credencialesRoutes from './credenciales-routes';
import detalleCredencialRoutes from './detalle_credencial-routes';
import carteraRoutes from './cartera-routes';
import estadoBienestarRoutes from './estado-bienestar-routes';
import especiesRoutes from './especies-routes';
import razasRoutes from './razas-routes';
import mascotasRoutes from './mascotas-routes';
import cProductoRoutes from './c-producto-routes';
import prstsRoutes from './prst-routes';
import tProductosRoutes from './t-productos-routes';
import inventariosRoutes from './inventarios-routes';
import proveedoresRoutes from './proveedores-routes';
import kardexRoutes from './kardex-routes';
import mInventariosRoutes from './m-inventarios-routes';
import formaPagoRoutes from './formaPago-routes';
import detallePagoRouter from './detalle_pago-routes';
import c_movimientoRouter from './cartera_movimiento-routes';
import diaPagoRouter from './diaPago-routes';
import especificacionRouter from './beneficios_has_puntos-routes';
import contadorCupoRouter from './contador_cupo-routes';
import notaCreditoRouter from './nota-credito-router';
// Router main
const router = Router();

// Router children
router.use('/api/auth', authRoutes);
router.use('/api/roles', rolesRoutes);
router.use('/api/sesiones', sesionesRoutes);
router.use('/api/sedes', sedesRoutes);
router.use('/api/vehiculos', vehiculosRoutes);
router.use('/api/perfiles', perfilesRoutes);
router.use('/api/usuarios', usuariosRoutes);
router.use('/api/detalle-usuarios', detalleUsuarioRoutes);
router.use('/api/seguridad-social', SeguridadSocialRoutes);
router.use('/api/telefonos', telefonosRouter);
router.use('/api/referencia_familiares', referenciaFamiliaresRouter);
router.use('/api/auxilios', auxiliosRoutes);
router.use('/api/parentescos', parentescoRoutes);
router.use('/api/asegurados', aseguradosRoutes);
router.use('/api/clientes', clienteRoutes);
router.use('/api/microempresas', microEmpresaRouter);
router.use('/api/departamentos', departamentoRouter);
router.use('/api/municipios', municipioRouter);
router.use('/api/origenes', origenesRoutes);
router.use('/api/premiaciones', premiacionesRoutes);
router.use('/api/negociacion-empresas', negociacionEmpresasRoutes);
router.use('/api/empresas', empresasRoutes);
router.use('/api/categoria-notas', categoriaNotasRoutes);
router.use('/api/objeciones', objecionesRoutes);
router.use('/api/notas', notasRoutes);
router.use('/api/categoria-beneficios', categoriaBeneficiosRoutes);
router.use('/api/beneficios', beneficiosRoutes);
router.use('/api/tipo_zonas', tipoZona);
router.use('/api/punto-beneficios', puntoBeneficiosRoutes);
router.use('/api/zonas', zonaRoutes);
router.use('/api/comunas', comunaRoutes);
router.use('/api/barrios', barrioRoutes);
router.use('/api/referencias', referenciaRoutes);
router.use('/api/detalle-referencias', detalleReferenciaRoutes);
router.use('/api/productos', productosRoutes);
router.use('/api/estado-cupos', estadoCuposRoutes);
router.use('/api/cupos', cupoRoutes);
router.use('/api/detalle-credencial', detalleCredencialRoutes);
router.use('/api/cartera', carteraRoutes);
router.use('/api/credenciales', credencialesRoutes);
router.use('/api/estado-cupos', estadoCuposRoutes);
router.use('/api/estado-bienestar', estadoBienestarRoutes);
router.use('/api/especies', especiesRoutes);
router.use('/api/razas', razasRoutes);
router.use('/api/mascotas', mascotasRoutes);
router.use('/api/c-productos', cProductoRoutes);
router.use('/api/prsts', prstsRoutes);
router.use('/api/t-productos', tProductosRoutes);
router.use('/api/inventarios', inventariosRoutes);
router.use('/api/proveedores', proveedoresRoutes);
router.use('/api/kardex', kardexRoutes);
router.use('/api/m-inventarios', mInventariosRoutes);
router.use('/api/forma-pago', formaPagoRoutes);
router.use('/api/detalle-pago', detallePagoRouter);
router.use('/api/cartera-movimiento', c_movimientoRouter);
router.use('/api/dia-pago', diaPagoRouter);
router.use('/api/especificaciones', especificacionRouter);
router.use('/api/contador', contadorCupoRouter);
router.use('/api/nota-credito', notaCreditoRouter);
export default router;