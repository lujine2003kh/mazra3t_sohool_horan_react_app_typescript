import styled, { css } from 'styled-components';
import '../style/prices.css';
import money from '../media/undraw_wallet_re_cx9u.svg';
interface TableProps {
  className?: string;
}

const TableContainer = styled.div`
  position: relative;
  overflow: hidden;
  shadow-md;
  rounded-lg;
`;

const Table = styled.table`
  table-fixed;
  width: 80%;
  text-align: left;
  margin-left:10%;
  margin-right:10%;
`;

const Thead = styled.thead`
  background-color: #4f8c73;
  color: #e5e7eb;
  text-transform: uppercase;
  font-size:22px;
  font-family:Georgia, 'Times New Roman', Times, serif;
  height:60px;
`;

const Tbody = styled.tbody`
  background-color: #bfd9ce;
  color: black;
  height:50px;
  font-size:20px;
`;

const Tr = styled.tr`
  padding: 4px;
`;

const Td = styled.td`
  padding: 25px;
  border: 1px solid #56967A;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-family:Georgia, 'Times New Roman', Times, serif;
  
`;
const ProductTable: React.FC<TableProps> = () => {
  return (
    <TableContainer>
        <p className='p'>أسعار الأيام و الأوقات </p>
      <Table>
        <Thead>
          <Tr>
            <Td contentEditable={true}>Day</Td>
            <Td contentEditable={true}>(10am-8pm) نهاري </Td>
            <Td contentEditable={true}>(10am-12am) نهاري مع سهرة</Td>
            <Td contentEditable={true}>(10pm-8am) ليلي </Td>
            <Td contentEditable={true}>يوم كامل</Td>
          </Tr>
        </Thead>
        <Tbody>
        <Tr>
            <Td contentEditable={true}>الأحد</Td>
            <Td contentEditable={true}>140 jd</Td>
            <Td contentEditable={true}>170 jd</Td>
            <Td contentEditable={true}>110 jd</Td>
            <Td contentEditable={true}>200 jd</Td>
          </Tr>
          <Tr>
            <Td contentEditable={true}>الاثنين</Td>
            <Td contentEditable={true}>140 jd</Td>
            <Td contentEditable={true}>170 jd</Td>
            <Td contentEditable={true}>110 jd</Td>
            <Td contentEditable={true}>200 jd</Td>
          </Tr>
          <Tr>
            <Td contentEditable={true}>الثلاثاء</Td>
            <Td contentEditable={true}>140 jd</Td>
            <Td contentEditable={true}>170 jd</Td>
            <Td contentEditable={true}>110 jd</Td>
            <Td contentEditable={true}>200 jd</Td>
          </Tr>
          <Tr>
            <Td contentEditable={true}>الأربعاء</Td>
            <Td contentEditable={true}>140 jd</Td>
            <Td contentEditable={true}>170 jd</Td>
            <Td contentEditable={true}>110 jd</Td>
            <Td contentEditable={true}>200 jd</Td>
          </Tr>
          <Tr>
            <Td contentEditable={true}>الخميس</Td>
            <Td contentEditable={true}>140 JD</Td>
            <Td contentEditable={true}>170 JD</Td>
            <Td contentEditable={true}>110 JD</Td>
            <Td contentEditable={true}>200 JD</Td>
          </Tr>
          <Tr>
            <Td contentEditable={true}>الجمعة</Td>
            <Td contentEditable={true}>170 JD</Td>
            <Td contentEditable={true}>200 JD</Td>
            <Td contentEditable={true}>130 JD</Td>
            <Td contentEditable={true}>240 JD</Td>
          </Tr>
          <Tr>
            <Td contentEditable={true}>السبت</Td>
            <Td contentEditable={true}>170 JD</Td>
            <Td contentEditable={true}>200 JD</Td>
            <Td contentEditable={true}>130 JD</Td>
            <Td contentEditable={true}>240 JD</Td>
          </Tr>
          {/* rest of the table rows */}
        </Tbody>
      </Table>
      <div className="parent">
      <div className="div1 price">10 JD </div>
      <div className="div2">: خدمة تنظيف</div>
      <div className="div3 price">20 JD</div>
        <div className="div4">: مبلغ تأمين</div>
        <div className="div5"><img src={money} className='money'/></div>
    </div>
    </TableContainer>
    
  );
};

export default ProductTable;