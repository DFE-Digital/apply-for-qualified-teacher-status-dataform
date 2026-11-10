/*  
    The below JS code will loop through the listed tables from the Becoming a Teacher project. 
    For each table it will construct a declaration using the schemaName and tableName. 
*/

const TableNames = [
        {schemaName: "dataform", tableName:"academic_cycles_latest_register"},
        {schemaName: "dataform", tableName:"recruitment_cycle_timetables_latest_apply"},
];

TableNames.forEach(table => {
        declare({
            database: "rugged-abacus-218110",
            schema: table.schemaName,
            name: table.tableName
        });
});