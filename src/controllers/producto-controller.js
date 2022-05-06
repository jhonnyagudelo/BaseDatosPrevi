import Producto from '../models/Producto';
import Referencia from '../models/Referencia';
export const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: [
        {
          model: Referencia,
          atributes: [],
        },
      ],
    });
    if (!productos.length > 0)
      return res.status(404).json({ message: 'Productos dont exists' });

    res.json({ message: 'Productos find successfully', data: productos });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findOne({
      where: { id },
      include: [
        {
          model: Referencia,
          atributes: [],
        },
      ],
    });
    if (!producto)
      return res.status(404).json({ message: 'Producto dont exists' });

    res.json({ message: 'Producto find successfully', data: producto });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createProducto = async (req, res) => {
  try {
    const { referencia_producto, descripcion } = req.body;
    const newProducto = await Producto.create(
      {
        referencia_producto,
        descripcion,
      },
      { fields: ['referencia_producto', 'descripcion'] }
    );

    if (!newProducto)
      return res
        .status(404)
        .json({ message: 'Producto dont created', data: {} });

    res.json({ message: 'Producto created successfully', data: newProducto });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const referenciaProducto = async (req, res) => {
  try {
    const { producto, referencia } = req.body;
    const newProducto = await Producto.create(
      {
        referencia_producto: producto.referencia_producto,
        descripcion: producto.descripcion,
      },
      { fields: ['referencia_producto', 'descripcion'] }
    ).then(async (res) => {
      await Referencia.create(
        {
          detalle_referencia_id: referencia.detalle_referencia_id,
          producto_id: res.id,
          nombre: referencia.nombre,
          r_numero: referencia.r_numero,
          prod_item: referencia.prod_item,
          contador_inicial: referencia.contador_inicial,
          contador_final: referencia.contador_final,
        },
        {
          fields: [
            'detalle_referencia_id',
            'producto_id',
            'nombre',
            'r_numero',
            'prod_item',
            'contador_inicial',
            'contador_final',
          ],
        }
      );
    });
    return res.json({ message: 'Producto creado', data: newProducto });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const updateProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { referencia_producto, descripcion } = req.body;
    const updatedProducto = await Producto.findOne({ where: { id } });
    if (!updatedProducto)
      return res.status(404).json({ message: 'Producto dont exists' });

    await updatedProducto.update(
      { referencia_producto, descripcion },
      { where: { id } }
    );
    res.json({
      message: 'Producto updated successfully',
      data: updatedProducto,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProducto = await Producto.findOne({ where: { id } });
    if (!deleteProducto)
      return res.status(404).json({ message: 'Producto dont exists' });

    await deleteProducto.destroy();
    res.json({ message: 'Producto deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
