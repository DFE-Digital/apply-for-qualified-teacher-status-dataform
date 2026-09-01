/*  
    The below JS code will loop through the listed tables from the Becoming a Teacher project. 
    For each table it will construct a declaration using the schemaName and tableName. 
*/

const TableNames = [
        {schemaName: "dataform", tableName:"academic_cycles_latest_register"},
];

TableNames.forEach(table => {
        declare({
            database: "rugged-abacus-218110",
            schema: table.schemaName,
            name: table.tableName
        });
});