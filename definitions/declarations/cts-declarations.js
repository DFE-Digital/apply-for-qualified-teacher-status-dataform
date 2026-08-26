/*  
    The below JS code will loop through the listed tables from the Cross Teacher Services project. 
    For each table it will construct a declaration using the schemaName and tableName. 
*/

const TableNames = [

        // Geographies - Cross Teacher Services Project
        {schemaName: "geographies", tableName:"counties"},
        {schemaName: "geographies", tableName:"country_codes"},
        {schemaName: "geographies", tableName:"international_territorial_level_1_areas"},
        {schemaName: "geographies", tableName:"international_territorial_level_2_areas"},
        {schemaName: "geographies", tableName:"international_territorial_level_3_areas"},
        {schemaName: "geographies", tableName:"locality_to_itl"},
        {schemaName: "geographies", tableName:"outward_postcode_to_itl"},
        {schemaName: "geographies", tableName:"postcode_to_itl"},
        {schemaName: "geographies", tableName:"partial_postcodes_to_itl"},
        {schemaName: "geographies", tableName:"postcode_to_coordinates"},

];

TableNames.forEach(table => {
        declare({
            database: "apply-for-qts-in-england",
            schema: table.schemaName,
            name: table.tableName
        });
});