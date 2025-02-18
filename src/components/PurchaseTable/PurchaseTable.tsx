import { AppDispatch, RootState } from "@store/store";
import { deletePurchaseThunk } from "@store/user/userThunk";
import { setIsEditing, setPurchaseEdit } from "@store/user/userSlice";
import { Table } from "@components/Table/Table";
import { TableBody } from "@components/Table/TableBody";
import { TableCell } from "@components/Table/TableCell";
import { TableHead } from "@components/Table/TableHead";
import { TableRow } from "@components/Table/TableRow";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

export const PurchaseTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const purchases = useSelector((statate: RootState) => statate.user.purchases);

  const onDelete = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const purchaseId = e.currentTarget.parentElement?.parentElement?.parentElement?.getAttribute("data-id");
    if (purchaseId) {
      try {
        await dispatch(deletePurchaseThunk(purchaseId));
        toast.success("Compra eliminada");
      } catch (error) {
        toast.error("Error al eliminar compra");
      }
    }
  }
  
  const onUpdate = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const purchaseId = e.currentTarget.parentElement?.parentElement?.parentElement?.getAttribute("data-id");
    if (purchaseId) {
      dispatch(setIsEditing(true));
      dispatch(setPurchaseEdit(purchaseId))
    }
  }
  
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
            {purchases.length > 0 ?
              purchases.map((purchase) => (
                <TableRow key={purchase.id} dataId={purchase.id}>
                  <TableCell type="body">{String(purchase.date)}</TableCell>
                  <TableCell type="body">{purchase.store}</TableCell>
                  <TableCell type="body">{purchase.trackingNumber}</TableCell>
                  <TableCell type="body" textPosition="text-right">
                    ${purchase.amount.toFixed(2)}
                  </TableCell>
                  <TableCell type="action" onDelete={onDelete} onUpdate={onUpdate}></TableCell>
                </TableRow>
              )) : (<TableRow><TableCell type="body" colSpan={5} className="text-center">No hay compras registradas</TableCell></TableRow>)}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
