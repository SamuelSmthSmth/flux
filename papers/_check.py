import ast, sys
sys.path.insert(0, '.')
sys.path.insert(0, 'tools/convert')
src = open('papers/convert_edexcel.py').read()
ast.parse(src)
print('syntax OK')
import importlib.util
spec = importlib.util.spec_from_file_location('ce', 'papers/convert_edexcel.py')
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)
print('keys:', len(m.api_keys()), [k[:10] + '...' for k in m.api_keys()])
print('MODELS:', m.MODELS)