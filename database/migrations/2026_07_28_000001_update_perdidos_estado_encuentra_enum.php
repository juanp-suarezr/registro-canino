<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('perdidos')) {
            DB::statement("UPDATE perdidos SET estado_encuentra = 'bien' WHERE estado_encuentra = 'bueno'");
            DB::statement("UPDATE perdidos SET estado_encuentra = 'delicado' WHERE estado_encuentra = 'malo'");
            DB::statement("UPDATE perdidos SET estado_encuentra = 'herido_enfermo' WHERE estado_encuentra = 'herido'");
            DB::statement("ALTER TABLE perdidos MODIFY COLUMN estado_encuentra ENUM('muy_bien', 'bien', 'regular', 'delicado', 'herido_enfermo') NULL");
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('perdidos')) {
            DB::statement("UPDATE perdidos SET estado_encuentra = 'bueno' WHERE estado_encuentra = 'bien' OR estado_encuentra = 'muy_bien'");
            DB::statement("UPDATE perdidos SET estado_encuentra = 'malo' WHERE estado_encuentra = 'delicado'");
            DB::statement("UPDATE perdidos SET estado_encuentra = 'herido' WHERE estado_encuentra = 'herido_enfermo'");
            DB::statement("ALTER TABLE perdidos MODIFY COLUMN estado_encuentra ENUM('bueno', 'regular', 'malo', 'herido') NULL");
        }
    }
};
