class TaskRepository {
  constructor(dao) {
    this.dao = dao
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS task (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        isComplete INTEGER DEFAULT 0,
        projectId INTEGER,
        CONSTRANT tasks_fk_projectId FOREIGN KEY (projectId)
          REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE
      )`
    return this.dao.run(sql)
  };
}

export default TaskRepository;