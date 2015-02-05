class CreateStations < ActiveRecord::Migration
  def change
    create_table :stations do |t|
      t.string :name
      t.string :title
      t.text :description
      t.integer :status
      t.float :latitude
      t.float :longitude
      t.timestamps null: false
    end

    add_index :stations, :name
  end
end
