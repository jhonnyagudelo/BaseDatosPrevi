import Vehiculo from '../models/Vehiculo';
import DetalleUsuario from '../models/DetalleUsuario';

export const getVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.findAll({
      include: [{ model: DetalleUsuario }]
    });
    if (!vehiculos.length > 0) return res.status(404).json({ message: 'Vehiculos dont exists', data: [] });

    res.json({
      message: 'Vehiculos find successfully',
      data: vehiculos
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e
    });
  }
};

export const getVehiculoById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehiculo = await Vehiculo.findOne({
      include: [{ model: DetalleUsuario }],
      where: { id }
    });
    if (!vehiculo) return res.status(404).json({ message: 'Vehiculo dont exists', data: {} });

    res.json({
      message: 'Vehiculo find successfully',
      data: vehiculo
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e
    });
  }
};

export const createVehiculo = async (req, res) => {
  try {
    const {
      f_soat,
      f_tecnicomecanica,
      placa_vehiculo,
      vehiculo,
      detalle_usuario_id
    } = req.body;
    const newVehiculo = await Vehiculo.create({
      f_soat,
      f_tecnicomecanica,
      placa_vehiculo,
      vehiculo,
      detalle_usuario_id
    }, {
      fields: [
        'f_soat',
        'f_tecnicomecanica',
        'placa_vehiculo',
        'vehiculo',
        'detalle_usuario_id'
      ]
    });
    if (!newVehiculo) return res.status(500).json({ message: 'Vehiculo dont created', data: {} });

    res.json({
      message: 'Vehiculo created successfully',
      data: newVehiculo
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e
    });
  }
};

export const updateVehiculoById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      f_soat,
      f_tecnicomecanica,
      placa_vehiculo,
      vehiculo
    } = req.body;
    const updateVehiculo = await Vehiculo.findOne({
      where: { id }
    });
    if (!updateVehiculo) return res.status(404).json({ message: 'Vehiculo dont exists', data: {} });

    await updateVehiculo.update({
      f_soat,
      f_tecnicomecanica,
      placa_vehiculo,
      vehiculo
    }, {
      where: { id }
    });
    res.json({
      message: 'Vehiculo find successfully',
      data: updateVehiculo
    });
  } catch (e) {
    res.status(500).json({
      message: 'something goes wrong',
      data: {},
      err: e
    });
  }
};

export const deleteVehiculoById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehiculo = await Vehiculo.findOne({
      where: { id }
    });
    if (!vehiculo) return res.status(404).json({ message: 'Vehiculo dont exists', data: {} });

    await Vehiculo.destroy({
      where: { id }
    });
    res.json({
      message: 'Vehiculo deleted successfully',
      data: {}
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e
    });
  }
};