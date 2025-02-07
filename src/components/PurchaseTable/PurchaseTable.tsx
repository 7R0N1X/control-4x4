import { Table } from "@components/Table/Table";
import { TableBody } from "@components/TableBody/TableBody";
import { TableCell } from "@components/TableCell/TableCell";
import { TableHead } from "@components/TableHead/TableHead";
import { TableRow } from "@components/TableRow/TableRow";

export const PurchaseTable = () => {
  return (
    <div className="w-full rounded-lg bg-white p-6 ring shadow-sm ring-[#E4E4E7]">
      <h2 className="mb-4 text-lg font-semibold">Historial de Compras</h2>
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell type="head">Fecha</TableCell>
              <TableCell type="head">Tienda</TableCell>
              <TableCell type="head">Tracking</TableCell>
              <TableCell type="head" textPosition="text-right">
                Valor Total
              </TableCell>
              <TableCell type="head" textPosition="text-right">
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell type="body">2024-01-24</TableCell>
              <TableCell type="body">Amazon</TableCell>
              <TableCell type="body">1Z999AA1234567890</TableCell>
              <TableCell type="body" textPosition="text-right">
                $150.00
              </TableCell>
              <TableCell type="action"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell type="body">2024-01-23</TableCell>
              <TableCell type="body">eBay</TableCell>
              <TableCell type="body">9405511298370123456781</TableCell>
              <TableCell type="body" textPosition="text-right">
                $150.00
              </TableCell>
              <TableCell type="action"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
